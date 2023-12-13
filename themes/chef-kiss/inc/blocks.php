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
	}
);
