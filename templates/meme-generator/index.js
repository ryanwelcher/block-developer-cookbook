/**
 * Dependencies
 */
const { join } = require('path');
const { version, description } = require('./package.json');

module.exports = {
	defaultValues: {
		version,
		description,
		author: 'The Block Developer Cookbook',
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		category: 'design',
		attributes: {},
		example: {},
		supports: {},
	},
	variants: {
		start: {},
		completed: {
			attributes: {
				topText: {
					type: 'string',
				},
				bottomText: {
					type: 'string',
				},
				image: {
					type: 'object',
				},
			},
			supports: {
				html: false,
				color: {
					text: true,
					background: false,
					gradients: false,
					enableContrastChecker: false,
				},
				typography: {
					fontSize: true,
					textAlign: true,
				},
				__experimentalFontFamily: true,
				__experimentalFontStyle: true,
				__experimentalFontWeight: true,
			},
			example: {
				attributes: {
					topText: "I don't always meme",
					bottomText: 'But when I do, I use the Meme Generator',
					image: {
						name: 'The Most Interesting Man In The World',
						url: 'https://i.imgflip.com/1bh8.jpg',
						width: 550,
						height: 690,
					},
					style: {
						elements: {
							link: {
								color: {
									text: 'var:preset|color|base',
								},
							},
						},
						typography: {
							textAlign: 'center',
							fontStyle: 'normal',
							fontWeight: '700',
						},
					},
					textColor: 'base',
					fontSize: 'x-large',
					fontFamily: 'montserrat',
				},
			},
		},
	},
	pluginTemplatesPath: join(__dirname, 'files/plugin'),
	blockTemplatesPath: join(__dirname, 'files/block'),
	assetsPath: join(__dirname, 'files/assets'),
};
