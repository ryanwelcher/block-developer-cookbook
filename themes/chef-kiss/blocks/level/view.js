/**
 * WordPress dependencies
 */
import { store } from '@wordpress/interactivity';

store( {
	actions: {
		'block-developers-cookbook': {
			toggle: ( { context } ) => {
				context[ 'block-developers-cookbook' ].isOpen =
					! context[ 'block-developers-cookbook' ].isOpen;
			},
		},
	},
	effects: {
		'block-developers-cookbook': {
			logIsOpen: ( { context } ) => {
				// Log the value of `isOpen` each time it changes.
				console.log(
					`Is open: ${ context[ 'block-developers-cookbook' ].isOpen }`
				);
			},
		},
	},
} );
