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

$context = array(
	'skillLevel' => get_post_meta( $post->ID, 'level', true ),
);

// Enqueue the view file.
if ( function_exists( 'gutenberg_enqueue_module' ) ) {
	gutenberg_enqueue_module( 'level-view' );
}
?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive='{ "namespace": "chef-kiss" }'
	data-wp-context='<?php echo wp_json_encode( $context ); ?>'
>
	<p>Skill Level: <span class="number-value level-three"></span></p>
</div>
