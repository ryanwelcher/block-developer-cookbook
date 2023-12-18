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

global $post;
$cooking_time = get_post_meta( $post->ID, 'time', true );
?>
<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
>
	<p>Prep Time: <span class="number-value"><?php echo esc_html( $cooking_time ); ?></span></p>
</div>
