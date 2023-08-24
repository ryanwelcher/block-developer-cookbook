<?php
/**
 * Plugin Name:       Block Developers Cookbook
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bdc
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
add_action(
	'init',
	function() {
		$dirs = array_filter( glob( __DIR__ . '/build/*' ), 'is_dir' );

		foreach ( $dirs as $block_dir ) {
			register_block_type( trailingslashit( $block_dir ) );
		}
	}
);

// Enqueue filename from a plugin
add_action(
	'enqueue_block_editor_assets',
	function() {
		$assets_file = plugin_dir_path( __FILE__ ) . '/build/hooks.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'script-handle',
				plugin_dir_url( __FILE__ ) . '/build/hooks.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);


add_filter(
	'block_categories_all',
	function( $categories ) {
		array_unshift(
			$categories,
			array(
				'slug'  => 'block-developers-cookbook',
				'title' => __( 'Block Developers Cookbook', 'block-developers-cookbook' ),
			)
		);
		return $categories;
	},
	10
);

// Add some post meta.
add_action(
	'init',
	function() {
		register_post_meta(
			'post',
			'firstName',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);
		register_post_meta(
			'post',
			'lastName',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);
	}
);
