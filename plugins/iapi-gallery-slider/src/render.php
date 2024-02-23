<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generate unique id for aria-controls.
$unique_id = wp_unique_id( 'p-' );
?>

<div <?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive='{ "namespace": "iapi-gallery" }'
	data-wp-init="callbacks.setupSlider"
	data-wp-on-document--keydown="callbacks.onKeyDown"
>
	<div class="slider-container" data-wp-style--transform="state.currentPos">
		<?php echo wp_kses_post( $content ); ?>
	</div>
	<div class="buttons">
		<button data-wp-on--click="actions.prevImage" data-wp-bind--disabled="state.noPrevSlide">Prev</button>
		<button data-wp-on--click="actions.nextImage"data-wp-bind--disabled="state.noNextSlide">Next</button>
	</div>
</div>
