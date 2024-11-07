<?php
/**
 * Plugin Name:       Custom Binding Source
 * Description:       Creates a custom binding source to manage post excerpt and a block variation to easily insert it.
 * Requires Plugins:  gutenberg
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-binding-source
 *
 * @package           block-developers-cookbook
 */

namespace BlockDevelopersCookbook;

/**
 * Register a custom binding source to manage the post excerpt.
 */
function register_excerpt_binding_source() {
	register_block_bindings_source(
		'block-developer-cookbook/excerpt',
		array(
			'label'              => __( 'Post Excerpt', 'chef-kiss' ),
			'get_value_callback' => __NAMESPACE__ . '\retrieve_excerpt_binding',
			'uses_context'       => array( 'postId', 'postType' ),
		)
	);
}

/**
 * The callback to return the excerpt for the binding
 */
function retrieve_excerpt_binding( $source_args, $block_instance ) {
	$post_id      = $block_instance->context['postId'];
	$post_type    = $block_instance->context['postType'];
	$current_post = get_post( $post_id );
	return $current_post->post_excerpt;
}
add_action( 'init', __NAMESPACE__ . '\register_excerpt_binding_source' );


/**
 * Enqueue the script that registers the binding and the block variation.
 */
function enqueue_binding_scripts() {
	$custom_binding_source_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	if ( file_exists( $custom_binding_source_file ) ) {
		$assets = include $custom_binding_source_file;
		wp_enqueue_script(
			'custom-binding-source',
			plugin_dir_url( __FILE__ ) . 'build/index.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_binding_scripts' );
