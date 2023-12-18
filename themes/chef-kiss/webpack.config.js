// External dependencies
const path = require( 'path' );
const { globSync } = require( 'glob' );

/**
 * WordPress dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
// Import the helper to find and generate the entry points in the src directory
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );

// Plugins.
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );
const baseCoreBlocksPath = 'css/core-blocks/';

// Gets all of the block stylesheets, which are enqueued separately and inlined
// into the `<head>` area by WordPress. These should not be bundled together.
const blockStylesheets = () =>
	globSync( `./${ baseCoreBlocksPath }*.scss` ).reduce(
		( files, filepath ) => {
			const name = path.parse( filepath ).name;

			files[ `${ baseCoreBlocksPath }${ name }` ] = path.resolve(
				process.cwd(),
				baseCoreBlocksPath,
				`${ name }.scss`
			);

			return files;
		},
		{}
	);

// Add any a new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		...blockStylesheets(),
		plugins: './js/plugins.js',
		variations: './js/variations.js',
	},
	plugins: [
		...defaultConfig.plugins,
		new RemoveEmptyScriptsPlugin( {
			stage: RemoveEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS,
		} ),
	],
};
