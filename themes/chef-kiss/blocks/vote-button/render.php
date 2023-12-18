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
	gutenberg_enqueue_module( 'vote-button-view' );
}


wp_store(
	array(
		'chef-kiss' => array(
			'buttonCTA' => __( 'Add Recipe', 'chef-kiss' ),
		),
	)
);


global $post;
$context = array(
	'time'      => intval( get_post_meta( $post->ID, 'time', true ) ),
	'disabled'  => false,
	'recipeId'  => $block->context['postId'],
	'added'     => false,
	'addCTA'    => __( 'Add Recipe', 'chef-kiss' ),
	'removeCTA' => __( 'Remove Recipe', 'chef-kiss' ),

);

?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive='{ "namespace": "chef-kiss" }'
	data-wp-context='<?php echo wp_json_encode( $context ); ?>'
	data-wp-watch='callbacks.canBeAdded'
>
<button data-wp-on--click="actions.vote" data-wp-bind--disabled="context.disabled" data-wp-text='state.buttonCTA'></button>
</div>
