# Overview

In this recipe, you will customize the build process provided by @wordpress/scripts and to be able to build a plugin that contains a single custom block , a custom Javascript file that registers a block variation, and a custom CSS file that corresponds to the block variation. We want to keep the code for our block in a blocks directory and the JS/CSS files in a resources directory.

## Step 1 - Changing the location of block files

After scaffolding the plugin, run `npm run start`. The command will run but you will see the following message in your terminal and there are no files added to the build directory.

```bash
Source directory "src" was not found. Please confirm there is a "src" directory in the root or the value passed to --webpack-src-dir is correct.
```

The scripts package expects to find block files in a src directory but in this project, you are using blocks to store those files. To address this, you need to tell scripts to use a different directory by passing the --webpack-src-dir flag to the build commands.

```bash
build: 'wp-scripts build --webpack-src-dir=blocks',
start: 'wp-scripts start --webpack-src-dir=blocks',
```

You have now told the scripts package to look for block files in a blocks directory instead of the default src directory. Test this by running `npm run build`.

## Step 2 - Adding a custom webpack file

Now that you have the block building, you need to get the custom Javascript and CSS files building.

The scripts package uses Webpack for its build process. Webpack is notoriously hard to configure but luckily the scripts package provides a default configuration so that you can extend it and only make the changes you need by adding them to a `webpack.config.js` file - create that file now in the root and paste this code into it:

```jsx
// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Export the webpack config.
module.exports = {
	...defaultConfig,
};
```

This code is importing the default configuration from the scripts package and simply exporting it again. If you ran either of the build commands now, scripts would detect this file and use it as its configuration. We’ve made no changes so everything will work as expected. Try running `npm run build` to confirm that everything works as it did before

## Step 3 - Adding more entry points

In order to get your custom JS/CSS building you’ll need to add some new entry points to the webpack configuration file. Entry points are the way to tell Webpack where to find a file you want to build.

```jsx
// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Export the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		variations: './resources/js/variations.js',
		'variation-styles': './resources/scss/variation.scss',
	},
};
```

Test this out by running `npm run build` and you’ll see that the new files are successfully output into the build directory. But now there is an issue; the block is no longer being built. This is because you overrode the entry points for the configuration and Webpack doesn’t know where to find the blocks!

You could try adding the default configuration back in by adding this:

```jsx
// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Export the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		variations: './resources/js/variations.js',
		'variation-styles': './resources/scss/variation.scss',
	},
};
```

This is a common pattern. You use the spread operator to add the context of the entry and then add your new ones.

This will work with any other property (you will see this later) however, the scripts package has a very cool feature built into it that can detect blocks and build them as needed.

You can re-enable this feature by importing the `getWebpackEntryPoints` and then adding it to the entry.

```jsx
// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
// Import the helper to find and generate the entry points in the src directory
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );
// Export the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
	    ...getWebpackEntryPoints(),
	    variations: './resources/js/variations.js',
	    'variation-styles': './resources/scss/variation.scss',
	},
};
```

Run the build command now to confirm that you now have both the new files and the block building into the build directory.

## Step 4 - Cleaning up the files we don't need

You may have also noticed that there is now an empty variation-style.js file in your build directory.

This is because Webpack creates a javascript file for every entry point even if it’s a CSS file!

You can clean this up by using the RemoveEmptyScriptsPlugin Webpack plugin.

This plugin does exactly what the name implies, it removes empty scripts.

You will need to extend the plugins section of the Webpack config to add this.

```jsx
// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Import the helper to find and generate the entry points in the src directory
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );

// Plugin to remove empty emitted scripts
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );

// Export the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		variations: './resources/js/variations.js',
		'variation-styles': './resources/scss/variation.scss',
	},
	plugins: [
		// Very important! Include WP's plugin config or the
		// world will cease to exist as we know it.
		...defaultConfig.plugins,
		// Removes the empty `.js` files generated by webpack but
		// sets it after WP has generated its `*.asset.php` file.
		new RemoveEmptyScriptsPlugin( {
			stage: RemoveEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS,
		} ),
	],
};
```

Run the build command again and you’re done. Bon appetit!
