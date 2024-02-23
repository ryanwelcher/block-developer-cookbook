/**
 * WordPress dependencies
 */
import { store } from '@wordpress/interactivity';

const { state, actions } = store( 'iapi-gallery', {
	state: {
		currentSlide: 0,
		totalSlides: 0,
		get noPrevSlide() {
			return state.currentSlide === 0;
		},
		get noNextSlide() {
			return state.currentSlide === state.totalSlides - 1;
		},

		get currentPos() {
			return `translateX(-${ state.currentSlide * 100 }%)`;
		},
	},
	actions: {
		prevImage: () => {
			state.currentSlide--;
		},
		nextImage: () => {
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
		},
		initSlide: () => {
			// This is called by the core/cover blocks inside this block.
			state.totalSlides++;
		},
	},
} );

const debugLog = ( data ) =>
	console.log( JSON.parse( JSON.stringify( data ) ) );
