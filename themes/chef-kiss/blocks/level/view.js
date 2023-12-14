/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'chef-kiss', {
	state: {
		get chefs() {
			const { skillLevel } = getContext();
			switch ( skillLevel ) {
				default:
					return '👨‍🍳';
				case '2':
					return '👨‍🍳👨‍🍳';
				case '3':
					return '👨‍🍳👨‍🍳👨‍🍳';
			}
		},
	},
} );
