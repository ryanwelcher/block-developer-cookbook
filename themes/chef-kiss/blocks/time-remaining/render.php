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

// Enqueue the view file.
if ( function_exists( 'gutenberg_enqueue_module' ) ) {
	gutenberg_enqueue_module( 'time-remaining-view' );
}

global $post;

$duration = intval( get_post_meta( $post->ID, 'duration', true ) );

wp_store(
	array(
		'chef-kiss' => array(
			'duration'        => $duration,
			'assigned'        => 0,
			'allowedValue'    => $duration,
			'votingOpen'      => true,
			'selectedRecipes' => array(),
			'totalDuration'   => $duration,
			'timeAssigned'    => 0,
		),
	)
);
?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive='{ "namespace": "chef-kiss" }'
	data-wp-watch='callbacks.watchTime'
>
Time: <span data-wp-text="state.timeAssigned"></span>/<span data-wp-text="state.totalDuration"></span>
</div>
