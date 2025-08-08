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
							build: `wp-scripts build ${slug}.js`,
							start: `wp-scripts start ${slug}.js`,
						}
					: view.customScripts,
			};
		},
	},
	variants: {
		dynamic: {
			render: 'file:./render.php',
		},
		static: {
			blockTemplatesPath: join(
				__dirname,
				'templates/block/static-variant'
			),
		},
		plugin: {
			pluginTemplatesPath: join(
				__dirname,
				'templates/plugin/plugin-variant'
			),
			blockTemplatesPath: join(
				__dirname,
				'templates/block/plugin-variant'
			),
		},
		interactive: {
			viewScriptModule: 'file:./view.js',
			customScripts: {
				build: 'wp-scripts build --experimental-modules',
				start: 'wp-scripts start --experimental-modules',
			},
			supports: {
				interactive: true,
			},
			blockTemplatesPath: join(
				__dirname,
				'templates/block/interactive-variant'
			),
		},
	},
	pluginTemplatesPath: join(__dirname, 'templates/plugin/default'),
	blockTemplatesPath: join(__dirname, 'templates/block/default'),
};
