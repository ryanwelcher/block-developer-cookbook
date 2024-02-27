const { join } = require( 'path' );

module.exports = {
	defaultValues: {
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
