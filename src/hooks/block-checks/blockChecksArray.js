export const blockChecks = [
  {
    name: 'core/heading',
    condition: (blocks) => blocks.some((block) => block.name === 'core/heading' && block.attributes.level === 1),
    message: 'Accessibility Error: Heading blocks should not use an H1',
  },
  {
    name: 'core/buttons',
    condition: (blocks) => checkButtons(blocks),
    message: 'Accessibility Error: Buttons must have content and URL',
  },
  {
    name: 'core/table',
    condition: (blocks) => blocks.some((block) => block.name === 'core/table' && block.attributes.head.length === 0),
    message: 'Accessibility Error: Tables must have a header section',
  },
]

// Check for attributes for text and url on individual core/button (inner block of core/buttons)
function checkButtons(blocks) {
  const hasInvalidButton = blocks.some((block) => {
    if (block.name === 'core/buttons') {
      return block.innerBlocks.some(
        ({ name, attributes }) =>
          name === 'core/button' && (attributes.text === '' || attributes.url === undefined)
      );
    }
    return true;
  });

  return hasInvalidButton;
}