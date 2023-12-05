<?php
/**
 * Enqueues
 */

namespace ChefKiss\Enqueues;

// Enqueue plugins from a theme.
add_action(
	'enqueue_block_editor_assets',
	function () {
		$assets_file = get_stylesheet_directory() . '/build/plugins.asset.php';

		if ( file_exists( $assets_file ) ) {
			$assets = include $assets_file;
			wp_enqueue_script(
				'bdc-plugins',
				get_stylesheet_directory_uri() . '/build/plugins.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
