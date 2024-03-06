# Overview

In this recipe, you'll do some prep work to get familiar with how the [Block Transforms API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-transforms/) is used to determine what your custom block can be converted to, what blocks can be converted to your custom block, and even allow your block to be inserted via text!

## Step 1 - The block you're building

You will be adding custom transforms for a provided custom block called Transformer. The block is very simple, it displays the Autobots logo and has single attribute called `message`. Feel free to look at the source code for the block to get a better understanding of how it is built.

In order to register transforms for a block, they must be added to the `registerBlockType` call for the block via the `transforms` property.

If you open `./src/index.js`, you will see the following:

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

Save your files and test this out! You should be able convert this block into a paragraph block.

# Step 4 - Going both ways

Now, create a new transition to go FROM a paragraph block TO your custom block.

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

# Step 3 - Using text to insert the block

You can use the `enter` type to have insert your custom block while typing in the the block editor. This transform type is only support for the `from` direction and requires a regular expression to capture the text.

Add the following transform object to the `from` array:

```js
{
	type: 'enter',
	regExp: /^rollout!$/,
	transform: () => {
		return createBlock( 'block-developers-cookbook/transforms' );
	},
},
```

This code will allow you to type `rollout!` and press enter to insert your custom block.

# Step 4 - Using a prefix to insert your block

You can use the `prefix` type to have your block inserted by inserted a prefix followed by a space.

```js
{
	type: 'prefix',
	prefix: '?',
	transform: () => {
		return createBlock( 'block-developers-cookbook/transforms' );
	},
},
```

Test this code by adding a `?` and pressing the space bar.

# Next Steps

Now that you've done the prep, you can add this ingredient to your chef's kit! Try creating a new transforms that will convert your custom block to a Cover block and back! Hint: You will need to use the innerBlocks parameter and add more default attributes

<details>
 <summary>See solution</summary>

```js
const transformers = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/cover' ],
			transform: ( { message }, innerBlocks ) => {
				const newInnerBlocks = [
					...innerBlocks,
					createBlock( 'core/paragraph', {
						align: 'center',
						content: message,
						fontSize: 'large',
						placeholder: 'Write title…',
					} ),
				];

				return createBlock(
					'core/cover',
					{
						customOverlayColor: '#be0b24',
					},
					newInnerBlocks
				);
			},
		},
	],
	from: [
		{
			type: 'block',
			blocks: [ 'core/cover' ],
			transform: ( attributes, innerBlocks ) => {
				const [ firstBlock ] = innerBlocks;
				const { content } =
					firstBlock.attributes || 'More that meets the eye!';
				return createBlock( 'block-developers-cookbook/transforms', {
					message: content,
				} );
			},
		},
	],
};
export default transformers;
```

</details>
