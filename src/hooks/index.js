/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

function addIsValueAttribute( settings, name ) {
	return {
		...settings,
		attributes: {
			...settings.attributes,
			blockIsValid: {
				type: 'boolean',
				default: true,
			},
		},
	};
}

addFilter(
	'blocks.registerBlockType',
	'block-developer-cookbook/add-is-valid-attribute',
	addIsValueAttribute
);

const { createHigherOrderComponent } = wp.compose;

const withClientIdClassName = createHigherOrderComponent(
	( BlockListBlock ) => {
		return ( props ) => {
			const classes = props.attributes.blockIsValid ? 'valid' : 'invalid';
			return <BlockListBlock { ...props } className={ classes } />;
		};
	},
	'withClientIdClassName'
);

addFilter(
	'editor.BlockListBlock',
	'my-plugin/with-client-id-class-name',
	withClientIdClassName
);

registerPlugin( 'block-developers-cook', {
	render: () => {
		const AllBlocks = useSelect( ( select ) =>
			select( 'core/block-editor' ).getBlocks()
		);

		const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

		const {
			lockPostSaving,
			unlockPostSaving,
			enablePublishSidebar,
			disablePublishSidebar,
		} = useDispatch( 'core/editor' );

		const buttonsBlocks = AllBlocks?.filter(
			( block ) => block.name === 'core/buttons'
		);

		const firstButtonsBlock = buttonsBlocks[ 0 ];

		const isValid = firstButtonsBlock?.innerBlocks.every(
			( block ) =>
				block.attributes?.text && block.attributes?.text.length !== 0
		);

		updateBlockAttributes( firstButtonsBlock?.clientId, {
			blockIsValid: isValid,
		} );

		if ( ! isValid ) {
			lockPostSaving();
			disablePublishSidebar();
		} else {
			unlockPostSaving();
			enablePublishSidebar();
		}

		return (
			<PluginDocumentSettingPanel
				name="prepublish-checklist"
				title={ __( 'Test', 'pre-publish-checklist' ) }
				className="prepublish-checklist"
			>
				sdfgsdfgsdf
			</PluginDocumentSettingPanel>
		);
	},
} );
