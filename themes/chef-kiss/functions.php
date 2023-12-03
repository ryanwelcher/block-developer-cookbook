<?php
/**
 * Theme functions
 */

namespace ChetKiss;

add_action(
	'init',
	function () {

		$args = array(
			'labels'             => array(
				'name'          => __( 'Recipes', 'chef-kiss' ),
				'singular_name' => __( 'Recipe', 'chef-kiss' ),
				'add_new_item'  => __( 'Add New Book', 'chef-kiss' ),
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
			'supports'           => array( 'title', 'editor', 'thumbnail' ),
			'show_in_rest'       => true,
		);

		register_post_type(
			'recipe',
			$args
		);

		// Register the cooking time meta fields.
		register_post_meta(
			'recipe',
			'cookingTime',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'number',
			)
		);
	}
);
