const { join } = require( 'path' );
const { version } = require( './package.json' );
module.exports = {
	defaultValues: {
		version,
		folderName: 'css',
		wpScripts: false,
		namespace: 'block-developers-cookbook',
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/css' ),
};
