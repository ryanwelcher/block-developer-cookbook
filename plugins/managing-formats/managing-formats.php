<?php
/**
 * Plugin Name:       Managing Formats
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       managing-formats
 *
 * @package           block-developers-cookbook
 */

add_action(
	'enqueue_block_editor_assets',
	function() {
		$citation_file = plugin_dir_path( __FILE__ ) . '/build/citation.asset.php';

		if ( file_exists( $citation_file ) ) {
			$assets = include $citation_file;
			wp_enqueue_script(
				'citation-format',
				plugin_dir_url( __FILE__ ) . '/build/citation.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}

		$allowed_file = plugin_dir_path( __FILE__ ) . '/build/allowed.asset.php';

		if ( file_exists( $allowed_file ) ) {
			$assets = include $allowed_file;
			wp_enqueue_script(
				'managing-formats',
				plugin_dir_url( __FILE__ ) . '/build/allowed.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);

