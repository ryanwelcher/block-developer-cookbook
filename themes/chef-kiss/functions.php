<?php
/**
 * Theme functions
 */

namespace ChefKiss;

// Define some constants.
define( 'THEME_DIR_PATH', get_stylesheet_directory() );
define( 'THEME_INC_PATH', THEME_DIR_PATH . '/inc/' );
define( 'THEME_DIR_URL', get_stylesheet_directory_uri() );
define( 'THEME_BLOCK_PATH', THEME_DIR_PATH . '/blocks/' );
define( 'THEME_BLOCK_URL', THEME_DIR_URL . '/blocks/' );
define( 'THEME_BUILD_DIR_PATH', THEME_DIR_PATH . '/build' );

// Require files.
require_once THEME_INC_PATH . 'post-types.php';
require_once THEME_INC_PATH . 'enqueues.php';
require_once THEME_INC_PATH . 'blocks.php';
require_once THEME_INC_PATH . 'rest-api.php';
