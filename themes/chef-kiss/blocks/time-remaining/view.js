/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'chef-kiss', {
	state: {
		get totalDuration() {
			console.log( state );
			return state.duration;
		},
		get timeAssigned() {
			return state.assigned;
		},
	},
	callbacks: {
		watchTime: () => {
			if ( state.assigned >= state.duration ) {
				console.log( 'Time is up!' );
				state.votingOpen = false;
			}
		},
	},
} );
