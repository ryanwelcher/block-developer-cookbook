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
		}
	}
);
