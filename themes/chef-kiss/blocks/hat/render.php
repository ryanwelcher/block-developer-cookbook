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

$context = array(
	'recipeId' => $block->context['postId'],
);

// Enqueue the view file.
if ( function_exists( 'gutenberg_enqueue_module' ) ) {
	gutenberg_enqueue_module( 'hat-view' );
}

$svg_id = "pattern_{$block->context['postId']}";
?>
<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive='{ "namespace": "chef-kiss" }'
	data-wp-context='<?php echo wp_json_encode( $context ); ?>'
>

	<div data-wp-bind--hidden='!selectors.isSelected'>
		<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/svg/chef-hat.svg' ); ?>" height="100" alt="Chef Hat" class="chef-hat-icon">
	</div>
</div>
