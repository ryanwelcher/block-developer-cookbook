/**
 * Import dependencies
 */
import { addFilter } from '@wordpress/hooks'
import { registerPlugin } from '@wordpress/plugins'
import { useSelect, useDispatch } from '@wordpress/data'
import { createHigherOrderComponent } from '@wordpress/compose'
import { blockChecks } from './blockChecksArray'

/**
 * Add attribute to block to use for block checks
 *
 * @param {Object} settings
 */
function addIsValueAttribute(settings) {
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      blockIsValid: {
        type: 'boolean',
        default: true,
      },
    },
  }
}
addFilter('blocks.registerBlockType', 'block-developer-cookbook/add-is-valid-attribute', addIsValueAttribute)

/**
 * Add a class and conditional message to blocks
 */
const blockWrapperUpdates = createHigherOrderComponent((BlockListBlock) => {
  const wrappedBlock = (props) => {
    const blockCheck = blockChecks.find((check) => check.name === props.name)
    const message = props.attributes.blockIsValid ? '' : blockCheck.message
    const classes = props.attributes.blockIsValid ? '' : 'invalid-block'

    return (
      <>
        <BlockListBlock {...props} className={classes} />
        {message && (
          <div className="invalid-block-error">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#E91C24">
              <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            {message}
          </div>
        )}
      </>
    )
  }

  // Set the displayName for the wrapped component
  wrappedBlock.displayName = `blockWrapperUpdates(${
    BlockListBlock.displayName || BlockListBlock.name || 'Component'
  })`

  return wrappedBlock
}, 'blockWrapperUpdates')

addFilter('editor.BlockListBlock', 'block-developer-cookbook/block-wrapper-updates', blockWrapperUpdates)

/**
 * Check block conditions, display a message and lock post saving is block is invalid
 */
function BlockChecksPanel() {
  const allBlocks = useSelect((select) => select('core/block-editor').getBlocks())
  const { updateBlockAttributes } = useDispatch('core/block-editor')

  // Destructure vars used for post locking based on block validation
  const {
    lockPostSaving,
    unlockPostSaving,
    lockPostAutosaving,
    unlockPostAutosaving,
    enablePublishSidebar,
    disablePublishSidebar,
  } = useDispatch('core/editor')

  const checkBlockAndInnerBlocks = (block) => {
    const blockCheck = blockChecks.find((check) => check.name === block.name)

    // Check block conditions and set validation attribute
    if (blockCheck) {
      const isValid = !blockCheck.condition([block])
      if (block.attributes.blockIsValid !== isValid) {
        updateBlockAttributes(block.clientId, { blockIsValid: isValid })
      }
    }

    // Check if block is used as an innerBlock
    if (block.innerBlocks.length > 0) {
      block.innerBlocks.forEach((innerBlock) => {
        checkBlockAndInnerBlocks(innerBlock)
      })
    }
  }

  // Loop through each block and perform checks
  allBlocks.forEach((block) => {
    checkBlockAndInnerBlocks(block)
  })

  // Check if editor has blocks
  if (allBlocks.length > 0) {
    const prePublishingChecks = blockChecks.map((check) => check.condition(allBlocks))

    // If any conditions on block checks fail prevent post publishing
    if (prePublishingChecks.some((condition) => condition)) {
      lockPostSaving()
      lockPostAutosaving()
      disablePublishSidebar()
    } else {
      unlockPostSaving()
      unlockPostAutosaving()
      enablePublishSidebar()
    }
  }
}

/**
 * Register sidebar panel
 */
registerPlugin('block-checks-panel', {
  render: BlockChecksPanel,
})
