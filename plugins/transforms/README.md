# Overview

In this recipe, you'll do some prep work to get familiar with how the [Block Transforms API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-transforms/) is used to determine what your custom block can be converted to, what blocks can be converted to your custom block, and even allow your block to be inserted via text!

## Setup

Run ` npm run prep:transforms` from the root of the repository

## Step 1 - The block your building

You will be adding custom transforms for a provided custom block called Transformer. The block is very simple, it displays the Autobots logo and has single attribute called `message`. Feel free to look at the source code for the block to get a better understanding of how it is built.

In order to register transforms for a block, they must be added to the `registerBlockType` call for the block via the `transforms` property.

If you open `../src.index.js`, you will see the following:

```js
registerBlockType( metadata.name, {
	edit: Edit,
	transforms: transformers,
	icon: Autobots,
} );
```

The `transforms` property is being passed the import `transformers` object which is being imported from the `./src/transforms.js` file and will contain all of the transforms for this block.

## Step 2 - Adding your first transform

Open the `./src/transforms.js` and have a look at the transformers object.

```js
const transformers = {
	to: [],
	from: [],
};
export default transformers;
```

Transforms type objects are stored in sub keys that represent the transformation direction. A block can be transformed `to` something or `from` something.

Once you've decided the direction, there six types of transforms that can be chosen from. However, the only type that supports both the `to` and `from` direction is the Block type.

-   block
-   enter
-   files
-   prefix
-   raw
-   shortcode

Let's add a transformation from this block to a paragraph block which uses the `block` type.

Define a new transform object in the `to` array with the following:

```js
const transformers = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( attributes, innerBlocks ) => {},
		},
	],
	from: [],
};
export default transformers;
```

The `blocks` property is the list of blocks that will appear in the list of available list of blocks this block can transform into.

The `transform` property is a function that is used to manually make the change from one block to another. It receives the attributes and innerBlocks from the block being transformed.

Inside the `transform` function, we will need to dynamically create a new block. You will need to use the `createBlock` function for that so import that now.

```js
/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transformers = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( attributes, innerBlocks ) => {},
		},
	],
	from: [],
};
export default transformers;
```

Next, add the following to complete the `transform` function:

```js
/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transformers = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( attributes, innerBlocks ) => {
				return createBlock( 'core/paragraph', {
					content: attributes.message,
				} );
			},,
		},
	],
	from: [],
};
export default transformers;
```

This line is create a new `core/paragraph` block and mapping the `message` attribute from your block to it's counter part in the new block.

Save your files and test this out! You should be able convert this block to a paragraph

# Step - 3 Going both ways

Next, create a new transition to go FROM a paragraph block TO your custom block.

The process is basically the same, except you add the transform to the `from` array and change the block being created in the `transforms` function.

```js
/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transformers = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( attributes, innerBlocks ) => {
				return createBlock( 'core/paragraph', {
					content: attributes.message,
				} );
			},,
		},
	],
	from: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( attributes, innerBlocks ) => {
				return createBlock( 'block-developers-cookbook/transforms', {
					message: attributes.content,
				} );
			},
		},
	],
};
export default transformers;
```
