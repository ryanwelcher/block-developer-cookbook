<?php
/**
 * Theme functions
 */

namespace ChefKiss;

// Define some constants.
define( 'THEME_DIR_PATH', get_stylesheet_directory() );
define( 'THEME_INC_PATH', THEME_DIR_PATH . '/inc/' );
define( 'THEME_DIR_URL', get_stylesheet_directory_uri() );

// Require files.
require_once THEME_INC_PATH . 'post-types.php';
require_once THEME_INC_PATH . 'enqueues.php';
