/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'chef-kiss', {
	state: {
		get buttonCTA() {
			const { added, addCTA, removeCTA } = getContext();

			return added ? removeCTA : addCTA;
		},
	},
	actions: {
		vote: () => {
			const context = getContext();
			const { time, recipeId, added } = context;
			if ( ! added ) {
				state.assigned += Number( time );
				state.allowedValue -= Number( time );
				state.selectedRecipes.push( recipeId );
			} else {
				state.assigned -= Number( time );
				state.allowedValue += Number( time );
				state.selectedRecipes = state.selectedRecipes.filter(
					( id ) => id !== recipeId
				);
			}
			context.added = ! context.added;
		},
	},
	callbacks: {
		canBeAdded: () => {
			const context = getContext();
			// console.log( state.selectedRecipes );
			context.disabled = context.time > state.allowedValue;
		},
	},
} );
