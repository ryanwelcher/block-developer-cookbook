/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'chef-kiss', {
	selectors: {
		isSelected: () => {
			const context = getContext();
			console.log( state.selectedRecipes.includes( context.recipeId ) );
			return state.selectedRecipes.includes( context.recipeId );
		},
	},
} );
