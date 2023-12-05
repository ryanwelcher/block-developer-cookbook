<?php
/**
 * Post type definitions
 *
 * @package ChefKiss\PostTypes;
 */

namespace ChefKiss\PostTypes;

add_action(
	'init',
	function () {
		register_recipes();
		register_conferences();
	}
);

/**
 * Register the recipes CPT
 */
function register_recipes() {
	$args = array(
		'labels'             => array(
			'name'          => __( 'Recipes', 'chef-kiss' ),
			'singular_name' => __( 'Recipe', 'chef-kiss' ),
			'add_new_item'  => __( 'Add New Recipe', 'chef-kiss' ),
		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'recipe' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'show_in_rest'       => true,
	);

	register_post_type(
		'recipe',
		$args
	);

	// Register the cooking time meta fields.
	register_post_meta(
		'recipe',
		'time',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'number',
			'default'      => 10,
		)
	);

	// Register the experience level.
	register_post_meta(
		'recipe',
		'level',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'number',
			'default'      => 1,
		)
	);
}

/**
 * Register the conferences CPT
 */
function register_conferences() {
	$args = array(
		'labels'             => array(
			'name'          => __( 'Conferences', 'chef-kiss' ),
			'singular_name' => __( 'Conference', 'chef-kiss' ),
			'add_new_item'  => __( 'Add New Conference', 'chef-kiss' ),
		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'conference' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'show_in_rest'       => true,
	);

	register_post_type(
		'conference',
		$args
	);

	// Register the amount of time.
	register_post_meta(
		'conference',
		'duration',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'number',
		)
	);
}
