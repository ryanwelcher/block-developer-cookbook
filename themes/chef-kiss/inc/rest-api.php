<?php
/**
 * REST API Endpoints
 *
 * @package ChefKiss\Endpoints
 */

namespace ChefKiss\Endpoints;

use WP_REST_Controller;

if ( ! function_exists( 'add_action' ) ) {
	return;
}

/**
 * Class to handle all of the requests from the front end.
 */
class BDC_REST_API extends WP_REST_Controller {

	const NAMESPACE = 'bdc/v1';

	/**
	 * Register the routes/
	 */
	public function register_routes() {
		register_rest_route(
			self::NAMESPACE,
			'/vote',
			array(
				array(
					'methods'  => \WP_REST_Server::CREATABLE,
					'callback' => array( $this, 'register_vote' ),
				),
			)
		);
	}

	/**
	 * Generate a vote for a recipe
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function register_vote( $request ) {
		$user_id       = $request['user_id']; // This needs to be unique. Hopefully a user_id from the database.
		$conference_id = $request['conference_id'];
		$recipe_id     = $request['recipe_id'];
		$action        = $request['action'] ?? 'add';

		$rtn = false;

		// Return an error if ids are missing.
		if ( ! $user_id || ! $conference_id || ! $recipe_id ) {
			return new \WP_Error( 'Missing Params', 'Requires: $user_id, $conference_id, and $recipe_id' );
		}

		// Generate the term name - we want to be able query for a count of terms for each recipe.
		$term_name = "{$user_id}_{$recipe_id}";

		// Check the action and act accordingly.
		switch ( $action ) {
			case 'add':
				$rtn = $this->add_vote( $term_name, $conference_id );
				break;
			case 'remove':
				$rtn = $this->remove_vote( $term_name, $conference_id );
				break;
			default:
				return new \WP_Error( 'Unknown action', 'Must be either  "add" or "remove"' );
		}

		if ( ! is_wp_error( $rtn ) ) {
			return new \WP_REST_Response(
				array(
					'status' => 'success',
					'data'   => $rtn,
				)
			);
		} else {
			// Pass WP_Errors through.
			return $rtn;
		}
	}

	/**
	 * Add a vote to a conference Id
	 *
	 * @param {string}  $term_name     The name of the term to create and assign.
	 * @param {integer} $conference_id The post ID of the conference.
	 */
	private function add_vote( $term_name, $conference_id ) {
		return wp_set_object_terms( $conference_id, $term_name, 'votes', true );
	}

	/**
	 * Remove a vote to a conference Id
	 *
	 * @param {string}  $term_name     The name of the term to create and assign.
	 * @param {integer} $conference_id The post ID of the conference.
	 */
	private function remove_vote( $term_name, $conference_id ) {
		$term = get_term_by( 'name', $term_name, 'votes', );
		if ( $term ) {
			return wp_delete_term( $term->term_id, 'votes' );
		}
		return new \WP_Error( 'Term not found' );
	}
}

// Register the endpoints.
add_action(
	'rest_api_init',
	function () {
		$controller = new BDC_REST_API();
		$controller->register_routes();
	}
);
