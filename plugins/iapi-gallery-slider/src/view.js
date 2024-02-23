/**
 * WordPress dependencies
 */
import { store, getElement, getContext } from '@wordpress/interactivity';

const { state, actions } = store( 'iapi-gallery', {
	state: {
		currentSlide: 0,
		slides: [],
		get totalSlides() {
			return state.slides.length;
		},
		get noPrevSlide() {
			const ctx = getContext();
			if ( ctx.continous ) {
				return false;
			}
			return state.currentSlide === 0;
		},
		get noNextSlide() {
			const ctx = getContext();
			if ( ctx.continous ) {
				return false;
			}
			return state.currentSlide === state.totalSlides - 1;
		},
		get currentPos() {
			return `translateX(-${ state.currentSlide * 100 }%)`;
		},
	},
	actions: {
		prevImage: () => {
			const ctx = getContext();
			if ( ctx.continous && state.currentSlide === 0 ) {
				state.currentSlide = state.totalSlides - 1;
				return;
			}
			state.currentSlide--;
		},
		nextImage: () => {
			const ctx = getContext();
			if (
				ctx.continous &&
				state.currentSlide === state.totalSlides - 1
			) {
				state.currentSlide = 0;
				return;
			}
			state.currentSlide++;
		},
	},
	callbacks: {
		onKeyDown: ( e ) => {
			switch ( e.key ) {
				case 'ArrowLeft': {
					if ( ! state.noPrevSlide ) {
						actions.prevImage();
					}
					break;
				}
				case 'ArrowRight': {
					if ( ! state.noNextSlide ) {
						actions.nextImage();
					}
					break;
				}
			}
			debugLog( state );
		},
		initSlide: () => {
			// This is called by the core/cover blocks inside this block.
			// Adds the element reference to the `slides` array.
			const { ref } = getElement();
			state.slides.push( ref );

			// The returned function executes when the element is removed from
			// the DOM.
			return () => {
				state.slides = state.slides.filter( ( s ) => s !== ref );
			};
		},
	},
} );

const debugLog = ( data ) =>
	console.log( JSON.parse( JSON.stringify( data ) ) );
