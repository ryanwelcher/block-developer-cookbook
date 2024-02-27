/**
 * WordPress dependencies
 */
import { store, getElement, getContext } from '@wordpress/interactivity';

const { state, actions } = store( 'iapi-gallery', {
	state: {
		get noPrevSlide() {
			const ctx = getContext();
			if ( ctx.continuous ) {
				return false;
			}
			return ctx.currentSlide === 0;
		},
		get noNextSlide() {
			const ctx = getContext();
			if ( ctx.continuous ) {
				return false;
			}
			return ctx.currentSlide === ctx.totalSlides - 1;
		},
		get currentPos() {
			const ctx = getContext();
			return `translateX(-${ ctx.currentSlide * 100 }%)`;
		},
		get imageIndex() {
			const ctx = getContext();
			return `${ ctx.currentSlide + 1 }/${ ctx.totalSlides }`;
		},
	},
	actions: {
		prevImage: () => {
			const ctx = getContext();
			if ( ctx.continuous && ctx.currentSlide === 0 ) {
				ctx.currentSlide = ctx.totalSlides - 1;
				return;
			}
			ctx.currentSlide--;
		},
		nextImage: () => {
			const ctx = getContext();
			if ( ctx.continuous && ctx.currentSlide === ctx.totalSlides - 1 ) {
				ctx.currentSlide = 0;
				return;
			}
			ctx.currentSlide++;
		},
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
	},
	callbacks: {
		initSlide: () => {
			const ctx = getContext();
			// This is called by the core/cover blocks inside this block.
			// Adds the element reference to the `slides` array.
			const { ref } = getElement();
			ctx.slides.push( ref );
			ctx.totalSlides = ctx.slides.length;

			// The returned function executes when the element is removed from
			// the DOM.
			return () => {
				ctx.slides = ctx.slides.filter( ( s ) => s !== ref );
			};
		},
	},
} );

const debugLog = ( data ) =>
	console.log( JSON.parse( JSON.stringify( data ) ) );
