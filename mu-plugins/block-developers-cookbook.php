<?php
/**
 * Plugin Name:       Block Developers Cookbook
 * Description:       Some global functionality for the Block Developer Cookbook
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ryan Welcher
 * Author URI:        www.ryanwelcher.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bdc
 */

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
