<?php
/**
 * Block related code
 *
 * @package ChefKiss\Blocks
 */

namespace ChefKiss\Blocks;

add_action(
	'init',
	function () {
		$blocks = glob( THEME_BUILD_DIR_PATH . '/*', GLOB_ONLYDIR );
		foreach ( $blocks as $block ) {
			register_block_type( $block );

			// Load the viewScript.
			$block_name         = basename( $block );
			$view_script_path   = THEME_BLOCK_URL . $block_name . '/view.js';
			$view_script_handle = $block_name . '-view';
			// Does the file exist?
			if (
				file_exists( THEME_BLOCK_PATH . $block_name . '/view.js' ) &&
				function_exists( 'gutenberg_register_module' )
			) {
				gutenberg_register_module(
					$view_script_handle,
					$view_script_path,
					array( '@wordpress/interactivity' ),
					'0.1.0'
				);
			}
		}

		// Get the block namespace paths.
		$paths = array_map(
			fn( $namespace ) => get_parent_theme_file_path( "build/css/{$namespace}" ),
			array( 'core-blocks' )
		);

		// Enqueue block level CSS
		// Loop through each of the block namespace paths, get their
		// stylesheets, and enqueue them.
		foreach ( $paths as $path ) {
			$files = new \FilesystemIterator( $path );

			foreach ( $files as $file ) {
				if ( ! $file->isDir() && 'css' === $file->getExtension() ) {

					$slug = $file->getBasename( '.css' );

					// Build a relative path and URL string.
					$relative = "build/css/core-blocks/{$slug}";

					// Bail if the asset file doesn't exist.
					if ( ! file_exists( get_parent_theme_file_path( "{$relative}.asset.php" ) ) ) {
						return;
					}

					// Get the asset file.
					$asset = include get_parent_theme_file_path( "{$relative}.asset.php" );

					// Register the block style.
					\wp_enqueue_block_style(
						"core/{$slug}",
						array(
							'handle' => "chef-kiss-core-{$slug}",
							'src'    => get_parent_theme_file_uri( "{$relative}.css"  ),
							'path'   => get_parent_theme_file_path( "{$relative}.css" ),
							'deps'   => $asset['dependencies'],
							'ver'    => $asset['version'],
						)
					);
				}
			}
		}
	}
);
