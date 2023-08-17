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
 * Text Domain:       block-developers-cookbook
 *
 * @package           block-developers-cookbook
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_developers_cookbook_block_init() {
	register_block_type( __DIR__ . '/build/connecting-to-meta-data' );
}
add_action( 'init', 'block_developers_cookbook_block_init' );


// Add some post meta
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
