const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		namespace: 'block-developers-cookbook',
		category: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		wpScripts: false,
		customPackageJSON: {
			scripts: {
				build: 'wp-scripts build',
				format: 'wp-scripts format',
				'lint:css': 'wp-scripts lint-style',
				'lint:js': 'wp-scripts lint-js',
				'packages-update': 'wp-scripts packages-update',
				'plugin-zip': 'wp-scripts plugin-zip',
				start: 'wp-scripts start',
			},
			devDependencies: {
				'@wordpress/scripts': '^26.12.0',
			},
		},
	},
	variants: {
		dynamic: {
			render: 'file:./render.php',
		},
		static: {},
		plugin: {},
		interactive: {
			viewScriptModule: "file:./view.js",
			customScripts: {
			  build: "wp-scripts build --experimental-modules",
			  start: "wp-scripts start --experimental-modules",
			},
			supports: {
			  interactive: true,
			},
		}
	},
	pluginTemplatesPath: join( __dirname, 'templates/plugin' ),
	blockTemplatesPath: join( __dirname, 'templates/block' ),
};
