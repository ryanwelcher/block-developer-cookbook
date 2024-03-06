# Overview

In this recipe, you will create a custom format to mark text as an acronym by wrapping it in an `<abbr>` tag and providing an explanation that is displayed using the `title` attribute using the `<Popover>` component.

## Setup

Run ` npm run prep:acronym-format` from the root of the repository. Once the scaffolding is completed, delete the `block.json` from inside the `src` directory. This is a file that was added automatically by the create-block package and you don't need it for this recipe.

## Step 1 - Preparing the build process

There are no blocks in the recipe so you will need to modify the build process to target the file we need. Open the `package.json` file make the following changes the the `build` a `start` commands:

```json
"build": "wp-scripts build ./src/acronym.js",
"start": "wp-scripts start ./src/acronym.js"
```

This will tell the `@wordpress/scripts` package to process the file found at `./src/acronym.js`. We could also name this file `index.js` and call the scripts without any parameters, but this way the files output are named `acronym.(js|css)`.

Run `npm start` to start the build process.

## Step 2 - Setting up the enqueues

Now that you're successfully building the script, you need to enqueue the build files in the block editor.

Add the following to the main php file of the plugin.

```php
// Hooks.
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_files_for_acronym_format' );

/**
 * Enqueue the files for the format.
 */
function enqueue_files_for_acronym_format() {
	$acronym_file = plugin_dir_path( __FILE__ ) . '/build/acronym.asset.php';

	if ( file_exists( $acronym_file ) ) {
		$assets = include $acronym_file;
		wp_enqueue_script(
			'acronym-format',
			plugin_dir_url( __FILE__ ) . 'build/acronym.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);

		wp_enqueue_style(
			'acronym-format-styles',
			plugin_dir_url( __FILE__ ) . 'build/acronym.css',
			array(),
			$assets['version']
		);
	}
}

```

This code checks to make sure that the `acronym.asset.php` generated when you ran the build process is in place. Then if that file exists, it enqueues the JS and CSS for the format.

## Step 3 - Defining the format settings and registering it

At this point, you are enqueueing empty files. So let's start adding some JavaScript!

Open the `./src/acronym.js` file and import `registerFormatType` from the `@wordpress/rich-text` along with some other dependencies you'll need.

```js
/**
 * WordPress dependencies
 */
import { registerFormatType } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import './editor.scss';
import AcronymEdit from './edit';
```

Update the `acronymFormat` object to give the format a title, a tag that will be used to wrap the selection, a class that will be added to that tag, and the component that will handle displaying the button in the block toolbar.

```js
export const acronymFormat = {
	title: __( 'Acronym', 'block-developers-cookbook' ),
	tagName: 'abbr',
	className: 'bdc-acronym',
	edit: AcronymEdit,
};
```

Now, register the new format. The [registerFormatType](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-rich-text/#registerformattype) function takes two parameters:

1. name `string`: Format name.
2. settings object `WPFormat`: Format settings. See the [official documentation for all of the supported properties](https://github.com/WordPress/gutenberg/blob/trunk/packages/rich-text/src/register-format-type.js#L10).

```js
registerFormatType( name, acronymFormat );
```

# Step 4 - Creating the component to display the format

Open the `./src/edit.js` file. In this file, you will build the component that will be used to display the format in the block toolbar.

To do this, you can use the `RichTextToolbarButton` from the `@wordpress/block-editor`. Import that now.

```js
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichTextToolbarButton } from '@wordpress/block-editor';
```

Next, update the `AcronymEdit` component to return the new `RichTextToolbarButton` that uses the custom icon provided and set the the title of the button. Notice that you are also using the `isActive` prop that is passed to the component. This will determine how the button is displayed based on whether the selection has this format active or not.

```js
<RichTextToolbarButton
	icon={ Icon }
	title={ __( 'Acronym', 'block-developer-cookbook' ) }
	isActive={ isActive }
	onClick={ () => {} }
/>
```

Ensure you're build command is running and then go test this out. You should see the format available in the dropdown list when yuo select some text but clicking on it does nothing.

Don't worry! This is expected at this point as you haven't defined what happens when the button is clicked.

# Step 5 - Handling the click and using a popover to add the acronym definition

When the user clicks on the format button, the intention is to provide the ability to explain the acronym and have it added as the `title` attribute on the front end so when the user hover over it, they see the explanation.

To do this we can use the `Popover` component. In `popover.js`, there is a custom `AcronymPopover` component that will handle all of the logic and while it's beyond the scope of this recipe to get into the details of it, you are encouraged to dive into it at your leisure.

What you need to to create is the logic to show and hide the `AcronymPopover` when the button is clicked and when the the user is done entering text into the popover. To do this, you'll need to introduce some local state.

Import the `useState` hook:

```js
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
```

Create a new piece of state to track if the popover is visible and set the default value to be `false`;

```js
function AcronymEdit( { isActive, onChange, value, contentRef } ) {
	const [ isPopoverVisible, setIsPopoverVisible ] = useState( false );

	return (
		<RichTextToolbarButton
			icon={ Icon }
			title={ __( 'Acronym', 'block-developer-cookbook' ) }
			isActive={ isActive }
			onClick={ () => {} }
		/>
	);
}
```

Next, create a helper function to toggle the value of `isPopoverVisible` between `true` and `false`.

```js
function AcronymEdit( { isActive, onChange, value, contentRef } ) {
	const [ isPopoverVisible, setIsPopoverVisible ] = useState( false );

	const togglePopover = () => setIsPopoverVisible( ( state ) => ! state );

	return (
		<RichTextToolbarButton
			icon={ Icon }
			title={ __( 'Acronym', 'block-developer-cookbook' ) }
			isActive={ isActive }
			onClick={ () => {} }
		/>
	);
}
```
Next, add the conditional to render AcronymPopover if isPopoverVisible is true.

**Don't forget the <></> tags to ensure we return a single element**

```js
function AcronymEdit( { isActive, onChange, value, contentRef } ) {
    const [ isPopoverVisible, setIsPopoverVisible ] = useState( false );

    const togglePopover = () => setIsPopoverVisible( ( state ) => ! state );

    return (
        <>
            <RichTextToolbarButton
                icon={ Icon }
                title={ __( 'Acronym', 'block-developer-cookbook' ) }
                isActive={ isActive }
                onClick={ () => {} }
            />
            { isPopoverVisible && (
                <AcronymPopover
                    value={ value }
                    onChange={ onChange }
                    onClose={ togglePopover }
                    contentRef={ contentRef }
                />
            ) }
        </>
    );
}
```
 Next, add () => togglePopover() to the onClick property of RichTextToolbarButton

```js
function AcronymEdit( { isActive, onChange, value, contentRef } ) {
	const [ isPopoverVisible, setIsPopoverVisible ] = useState( false );

	const togglePopover = () => setIsPopoverVisible( ( state ) => ! state );

	return (
		<>
			<RichTextToolbarButton
				icon={ Icon }
				title={ __( 'Acronym', 'block-developer-cookbook' ) }
				isActive={ isActive }
				onClick={ () => togglePopover() }
			/>
			{ isPopoverVisible && (
				<AcronymPopover
					value={ value }
					onChange={ onChange }
					onClose={ togglePopover }
					contentRef={ contentRef }
				/>
			) }
		</>
	);
}
```

You now have a working custom format!
