/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'chef_kiss_store', {
	state: {
		get totalDuration() {
			console.log( state );
			return state.duration || 'not set';
		},
		get timeAssigned() {
			return state.assigned;
		},
	},
} );
