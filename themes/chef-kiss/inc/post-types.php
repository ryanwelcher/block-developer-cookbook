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
		'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields', 'excerpt' ),
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

	register_post_meta(
		'page',
		'duration',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'number',
			'default'      => 90,
		)
	);

	// Register the votes taxonomy.
	$labels = array(
		'name'              => _x( 'Votes', 'taxonomy general name', 'chef-kiss' ),
		'singular_name'     => _x( 'Vote', 'taxonomy singular name', 'chef-kiss' ),
		'search_items'      => __( 'Search Votes', 'chef-kiss' ),
		'all_items'         => __( 'All Votes', 'chef-kiss' ),
		'parent_item'       => __( 'Parent Vote', 'chef-kiss' ),
		'parent_item_colon' => __( 'Parent Vote:', 'chef-kiss' ),
		'edit_item'         => __( 'Edit Vote', 'chef-kiss' ),
		'update_item'       => __( 'Update Vote', 'chef-kiss' ),
		'add_new_item'      => __( 'Add New Vote', 'chef-kiss' ),
		'new_item_name'     => __( 'New Vote Name', 'chef-kiss' ),
		'menu_name'         => __( 'Vote', 'chef-kiss' ),
	);

	$args = array(
		'hierarchical'      => false,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'show_in_rest'      => true,
		'rewrite'           => array( 'slug' => 'vote' ),
	);

	register_taxonomy( 'votes', array( 'recipe' ), $args );
}
