/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { useSelect } from '@wordpress/data';
import { registerFormatType, unregisterFormatType } from '@wordpress/rich-text';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useState, u } from '@wordpress/element';

const Test = () => {
	const [ runOnce, setRunOnce ] = useState( false );
	const formats = useSelect(
		( select ) => select( 'core/rich-text' ).getFormatTypes(),
		[]
	);

	if ( ! runOnce && formats.length ) {
		if ( formats.length ) {
			formats.forEach( ( format ) => {
				unregisterFormatType( format.name );
			} );
		}

		formats.forEach( ( format ) => {
			const { name, edit, ...settings } = format;
			registerFormatType( name, {
				edit: ( props ) => {
					const selectedBlock = useSelect(
						( select ) =>
							select( blockEditorStore ).getSelectedBlock(),
						[]
					);

					// this needs better logic.
					if (
						selectedBlock &&
						selectedBlock.name === 'core/button'
					) {
						return null;
					}
					return edit( props );
				},
				...settings,
			} );
		} );
		console.log( formats );
		setRunOnce( true );
	}

	return null;
};

registerPlugin( 'block-developers-cookbook-managing-formats-allowed-format', {
	render: Test,
} );
