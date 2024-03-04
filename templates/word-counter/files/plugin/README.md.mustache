# Overview

In this recipe, you will create a word count tool that will retrieve all of the blocks on the page, count the words and conditionally lock the post from being saved or published if there are not enough words

## Step 1 - Preparing the build process

There are no blocks in the recipe so you will need to modify the build process to target the file we need. Open the `package.json` file make the following changes the the `build` a `start` commands:

```json
"build": "wp-scripts build ./src/word-counter.js",
"start": "wp-scripts start ./src/word-counter.js"
```

This will tell the `@wordpress/scripts` package to process the file found at `./src/word-counter.js`. We could also name this file `index.js` and call the scripts without any parameters, but this way the file output is named `word-counter.js`.

Run `npm start` to start the build process.

## Step 2 - Setting up the enqueues

Now that you're successfully building the script, you need to enqueue the build file in the block editor.

Add the following to the main php file of the plugin.

```php
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_files_for_word_counter' );

/**
 * Enqueue the files for the format.
 */
function enqueue_files_for_word_counter() {
	$word_counter_file = plugin_dir_path( __FILE__ ) . '/build/word-counter.asset.php';

	if ( file_exists( $word_counter_file ) ) {
		$assets = include $word_counter_file;
		wp_enqueue_script(
			'word-counter',
			plugin_dir_url( __FILE__ ) . 'build/word-counter.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}
```

This code checks to make sure that the `word-counter.asset.php` generated when you ran the build process is in place. Then if that file exists, it enqueues the JS file in the block editor.

## Step 3 - Registering the SlotFill plugin.

We need our code to run inside the block editor and display some information to the user. To do that we're going to leverage the [SlotFill system](https://developer.wordpress.org/block-editor/reference-guides/components/slot-fill/).

We're going to use the [`PluginPostStatusInfo`](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-post-status-info/) slot that appears in the Summary panel in the block editor to display the information about the word count to the user.

In order to register our fill for that slot, we need to use the `registerPlugin` function from the `@wordpress/plugins` package which accepts two parameters:

1. A string representing the name of the name of the plugin
2. An object of settings for the plugin

The object has a number of properties but the only one we need is `render`. This is the name component that this plugin will render.

Add the following to `./src/word-counter.js`

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';

const Render = () => {
	return null;
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

This code registers the our plugin with a component called `Render` - which does nothing at the moment.

Let's add our the fill to the `Render` component now.

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
const Render = () => {
	return (
		<PluginPostStatusInfo>
			Word count information goes here
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

Save and test this and you should see "Word count information goes here" displayed at the bottom of the Summary panel

# Step 4 - Getting the number of blocks in the content

Now that that we are displaying something, let's work on getting the word count.

First, we're going to need all of the current block instances that have been inserted into the editor. To do that we can use the `useSelect` hook from the `@wordpress/data` package.

The `useSelect` hook takes a single parameter, namely a function that receives a single parameter called `select` that is used to retrieve data and returns the data retrieved.

Let's add the hook and a stub function now:

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';

const Render = () => {
	// Get the blocks from the editor.
	const blocks = useSelect( ( select ) => {}, [] );

	return (
		<PluginPostStatusInfo>
			Word count information goes here
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

Let's start look at the inner function we passed to `useSelect`. The `select` parameter that is received by our stub is a function is a function itself and it allow us to access selectors from any of the data stores provided by WordPress. Selectors are used to retrieve data from a data store.

For our case, we want to retrieve (or select) all of the inserted blocks on the page. We can do this with the `getBlocks` selector which is defined by the `@wordpress/block-editor` package. You can see the list of selectors for each package in the package reference section of the Block Editor Handbook.

In order for us to access a selector, we need to know the name of the store where it is defined and pass it to the `select` function. For the most part, stores are named as follows `core/{package-name}` so in our case the `getBlocks` selector is in the `@wordpress/block-editor` package to the store name is `core/block-editor`.

Update the code to the following

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';

const Render = () => {
	// Get the blocks from the editor.
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);

	return (
		<PluginPostStatusInfo>
			{ `There are ${ blocks.length } blocks on the page` }
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

Save and test this and you will see a new message about how many blocks are on the page. Just be sure to add some blocks!

One last thing, while accessing by hardcoding the name is correct and works. It's a better practice to get the store we want from the package directly. This makes it easier to figure out the name of the store as each packages exports a `store` variable and if it ever changes, we alway have the correct reference.

Let's update the code to import the `store` and give it an alias that makes is more clear which store we're using and use it in the `useSelect`

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

const Render = () => {
	// Get the blocks from the editor.
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);

	return (
		<PluginPostStatusInfo>
			{ `There are ${ blocks.length } blocks on the page` }
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

Save and test and every thing should still be working as expected.

# Step 5 - Counting the words on the page

Now that we have all of the blocks, we can get the word count. Luckily for us, there is a package that make this very easy called `@wordpress/wordcount` that provides a `count` function that takes a string of text and returns the number of words.

Update the code with the following and you should see the number of blocks message from before and a new message indicating how many words are in the original message.

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { count } from '@wordpress/wordcount';

const Render = () => {
	// Get the blocks from the editor.
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);

	const message = `There are ${ blocks.length } blocks on the page.`;
	const numberOfWordsInMessage = count( message );

	return (
		<PluginPostStatusInfo>
			{ `${ message } There are ${ numberOfWordsInMessage } words in the message` }
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

In order to use the `count` function to get the number of works in our list of blocks, we need to convert the array of block into string that if can understand. The `serialize` function from the `@wordpress/blocks'` can do that for us.

```js
/*
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';

const Render = () => {
	// Get the blocks from the editor.
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);

	const numberOfWordsInContent = count( serialize( blocks ) );

	return (
		<PluginPostStatusInfo>
			{ `There are ${ numberOfWordsInContent } words in the content` }
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

The message now shows how many words on in the content.

# Step 6 - Determining if there is enough content

The final step of recipe is to lock the post if there is not enough words on the page. Let's start by adding the logic to determine if there are enough words.

For our purposes, we're going to hard code the minimum word count but this could be done any other number of ways.

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';

const Render = () => {
	// Get the blocks from the editor.,
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);
	// The required number of words;
	const requiredWordCount = 200;

	const numberOfWordsInContent = count( serialize( blocks ) );

	return (
		<PluginPostStatusInfo>
			{ `There are ${ numberOfWordsInContent } words in the content` }
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

Next, we're going to use the `useState` and `useEffect` hooks keep track of the current word count and watch for changes in the content respectively. These hooks are both found in the `@wordpress/element` and are actually provide by React.

Update the code:

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';

const Render = () => {
	// Get the blocks from the editor.,
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);
	// Define the word count display state.
	const [ wordCountDisplay, setWordCountDisplay ] = useState( 0 );

	// The required number of words;
	const requiredWordCount = 200;

	const numberOfWordsInContent = count( serialize( blocks ) );

	return (
		<PluginPostStatusInfo>
			{ `There are ${ wordCountDisplay } words in the content` }
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

`useState` takes a single parameter representing the default value of our data returns a tuple that is the data we are storing and a function to update that data. By using array destructuring, we can name these items whatever we want.

Now, add the `useEffect` hook

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';

const Render = () => {
	// Get the blocks from the editor.,
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);
	// Define the word count display state.
	const [ wordCountDisplay, setWordCountDisplay ] = useState( 0 );

	// Track the changes in the content
	useEffect( () => {
		// Define a variable to track whether the post should be locked
		let lockPost = false;

		// Get the WordCount
		const currentWordCount = count( serialize( blocks ), 'words' );
		setWordCountDisplay( currentWordCount );

		// If the word count is less than the required, lock the post saving.
		if ( currentWordCount < requiredWordCount ) {
			lockPost = true;
		}

		// Lock or enable saving.
		if ( lockPost === true ) {
			console.log( 'LOCKED' );
		} else {
			console.log( 'UNLOCKED' );
		}
	}, [ blocks ] );

	// The required number of words;
	const requiredWordCount = 200;

	return (
		<PluginPostStatusInfo>
			{ `There are ${ wordCountDisplay } words in the content` }
		</PluginPostStatusInfo>
	);
};
```

There's a lot going on in this hooks so let's take a minute to go over it.

The `useEffect` accepts two parameters; a callback function to run, and a array of dependencies that will trigger the function to run. In our case, we passed `blocks` to ensure that any time the blocks change, the callback is run.

Inside of the callback, we're defining a variable called `lockPost`, this variable will always be `false` when the function is run then based on some logic later on, is potentially to `true`

Next, we've moved the process of counting the words into this callback and then update the stored `wordCountDisplay` by calling the updater function we created with `useState`.

Next, we're checking the to see if the word count is less that the required value and if so, setting the `postLock` variable to `true`

Finally, we're checking the value of `postLock` and sending message to the console.

Save and test this out. You should see new messages in the console when the content is changed.

# Step 7 - Locking and unlocking the post

Now that we have all the logic in place to know whether we need to lock the post, let's add the final piece of telling the block editor to lock or unlock the post.

The block (or site) editor has its own internal state that keeps track everything. For us to lock the post, we need to tell that internal store to make change. This is done by dispatching a action to the store. If you are familiar with Redux, this term will not be new. If not, think of it as sending a message to the store to make a change.

To send the messages to lock or unlock the post, we're going to use the `useDispatch` hook from the `@wordpress/data`. This hook is very similar to the `useSelect` hook we used before. It also accepts parameter of a store name, but instead of return data from the store, it returns the dispatchers for that store.

```js
/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { count } from '@wordpress/wordcount';
import { serialize } from '@wordpress/blocks';
import { useEffect, useState } from '@wordpress/element';
import { store as editorStore } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import WordCountDisplayComponent from './components/wordCountDisplay';

const Render = () => {
	// Get the blocks from the editor.,
	const blocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks(),
		[]
	);
	// Get the lockPostSaving and unlockPostSaving functions from the editor
	const { lockPostSaving, unlockPostSaving } = useDispatch( editorStore );

	// Define the word count display state.
	const [ wordCountDisplay, setWordCountDisplay ] = useState( 0 );

	// Track the changes in the content
	useEffect( () => {
		// Define a variable to track whether the post should be locked
		let lockPost = false;

		// Get the WordCount
		const currentWordCount = count( serialize( blocks ), 'words' );
		setWordCountDisplay( currentWordCount );

		// If the word count is less than the required, lock the post saving.
		if ( currentWordCount < requiredWordCount ) {
			lockPost = true;
		}

		// Lock or enable saving.
		if ( lockPost === true ) {
			lockPostSaving();
		} else {
			unlockPostSaving();
		}
	}, [ blocks, lockPostSaving, unlockPostSaving ] );

	// The required number of words;
	const requiredWordCount = 10;

	return (
		<PluginPostStatusInfo>
			<WordCountDisplayComponent
				wordCount={ wordCountDisplay }
				required={ requiredWordCount }
			/>
		</PluginPostStatusInfo>
	);
};

registerPlugin( 'block-developer-cookbook-word-counter', {
	render: Render,
} );
```

We're destructuring out the `lockPostSaving` and `unlockPostSaving` functions from the `editorStore` store that we imported and alias from the package and replaced the console messages with the approach function.

Now, as you make changes to the content the post will lock and unlock as needed. Notice that we're also importing a custom component to make the display a little nicer. Have a look at the source code in `src/components/wordCountDisplay.js`

Thank you, Chef!
