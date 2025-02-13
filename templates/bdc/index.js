const { join } = require('path');

module.exports = {
	defaultValues: {
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		transformer: (view) => {
			const {
				variantVars: { isPluginVariant },
				slug,
			} = view;
			return {
				...view,
				customScripts: isPluginVariant
					? {
							build: `wp-scripts build ./src/${slug}.js`,
							start: `wp-scripts start ./src/${slug}.js`,
						}
					: view.customScripts,
			};
		},
	},
	variants: {
		dynamic: {
			render: 'file:./render.php',
		},
		static: {},
		plugin: {},
		interactive: {
			viewScriptModule: 'file:./view.js',
			render: 'file:./render.php',
			customScripts: {
				build: 'wp-scripts build --experimental-modules',
				start: 'wp-scripts start --experimental-modules',
			},
			supports: {
				interactive: true,
			},
		},
	},
	pluginTemplatesPath: join(__dirname, 'templates/plugin'),
	blockTemplatesPath: join(__dirname, 'templates/block'),
};
