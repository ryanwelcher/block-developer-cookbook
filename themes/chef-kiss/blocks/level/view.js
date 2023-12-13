/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'chef-kiss', {
	state: {
		get chefs() {
			const { skillLevel } = getContext();
			console.log( skillLevel );
			switch ( skillLevel ) {
				case '1':
					return '👨‍🍳';
				case '2':
					return '👨‍🍳👨‍🍳';
				case '3':
					return '👨‍🍳👨‍🍳👨‍🍳';
			}
		},
	},
} );
