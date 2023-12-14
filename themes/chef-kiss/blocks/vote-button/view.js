/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'chef-kiss', {
	actions: {
		vote: () => {
			const context = getContext();
			console.log( context, state );
			state.assigned += Number( context.time );
			state.allowedValue -= Number( context.time );
			state.selectedRecipes.push( context.recipeId );
			// context.selected = true;
		},
	},
	callbacks: {
		canBeAdded: () => {
			const context = getContext();
			console.log( state.selectedRecipes );
			context.disabled = context.time > state.allowedValue;
		},
	},
} );
