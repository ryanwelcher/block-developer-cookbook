<?php





/**
 * Register the script we want to load with the core blocks
 */
function register_custom_js_script() {
		// Register the custom script to be used later.
		$js_assets = include $js_file;
		wp_register_script(
			'custom-script-for-core-block',
			plugin_dir_url( __FILE__ ) . '/build/index.js',
			$js_assets['dependencies'],
			$js_assets['version'],
			true
		);

		// Register a custom style to be used later.
		wp_register_style(
			'custom-style-for-core-block',
			plugin_dir_url( __FILE__ ) . '/build/index.css',
			array(),
			$js_assets['version'],
		);
}
add_action( 'wp_enqueue_scripts', 'register_custom_js_script' );









/**
 * Enqueue our custom script for the core blocks.
 *
 * @see https://developer.wordpress.org/reference/hooks/render_block/
 *
 * @param string $block_content The block content.
 * @param array  $block         The full block.
 */
function enqueue_files_for_core_blocks( $block_content, $block ) {
	// Enqueue the same script for more than one block type.
	if (
		'core/cover' === $block['blockName'] ||
		'core/image' === $block['blockName']
	) {

		wp_enqueue_script( 'custom-script-for-core-block' );
		wp_enqueue_style( 'test-styles' );
	}
	// Be sure to sure the return the block content.
	return $block_content;
}

add_filter( 'render_block', 'enqueue_files_for_core_blocks', 10, 2 );










/**
 * Enqueue our custom script for a single core block by using the specific hook
 *
 * @see https://developer.wordpress.org/reference/hooks/render_block_this-name/
 *
 * @param string $block_content The block content.
 * @param array  $block         The full block, including name and attributes.
 */
function enqueue_files_for_one_core_block( $block_content ) {
	// Enqueue the script for a single block type.
	// Append the the fader class to to the block wrapper.
	$tag = new WP_HTML_Tag_Processor( $block_content );
	if ( $tag->next_tag() ) {
		$tag->add_class( 'fader' );
	}
	$block_content = $tag->get_updated_html();
	wp_enqueue_script( 'custom-script-for-core-block' );
	wp_enqueue_style( 'test-styles' );
	// Be sure to sure the return the block content.
	return $block_content;
}
