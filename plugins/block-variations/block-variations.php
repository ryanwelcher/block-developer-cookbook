<?php
/**
 * Plugin Name:       Block Variations
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-variations
 *
 * @package           block-developers-cookbook
 */
add_action(
	'enqueue_block_editor_assets',
	function() {
		$citation_file = plugin_dir_path( __FILE__ ) . '/build/block-variations.asset.php';

		if ( file_exists( $citation_file ) ) {
			$assets = include $citation_file;
			wp_enqueue_script(
				'block-variations',
				plugin_dir_url( __FILE__ ) . '/build/block-variations.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);

// wp_oembed_add_provider( 'https://playground.powerbi.com/*', 'https://playground.powerbi.com/oembed' );


// https://playground.powerbi.com/sampleReportEmbed
