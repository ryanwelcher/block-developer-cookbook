/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { useSelect, select as selectFunc } from '@wordpress/data';
import { unregisterFormatType, registerFormatType } from '@wordpress/rich-text';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';

const RemoveFormats = () => {
	const [ initialFormats, setInitialFormats ] = useState( [] );

	// useSelect( ( selectFn ) => {
	// 	setInitialFormats( selectFn( 'core/rich-text' ).getFormatTypes() );
	// }, [] );

	const selectedBlock = useSelect( ( select ) =>
		select( blockEditorStore ).getSelectedBlock()
	);

	useEffect( () => {
		const formats = selectFunc( 'core/rich-text' ).getFormatTypes();
		setInitialFormats( formats );
	}, [] );

	useEffect( () => {
		const allowList = [
			{
				block: 'core/button',
				allowedFormats: [ 'core/bold', 'core/italic' ],
			},
			{
				block: 'core/paragraph',
				allowedFormats: [],
			},
		];

		const isAffectedBlock = allowList.some(
			( { block } ) => block === selectedBlock?.name
		);

		console.log( 'selectedBlock', selectedBlock, isAffectedBlock );

		if ( isAffectedBlock ) {
			// First, unregister all formats.
			initialFormats.forEach( ( format ) => {
				unregisterFormatType( format.name );
			} );

			initialFormats.forEach( ( format ) => {
				const { name, edit, ...settings } = format;

				const { allowedFormats } = allowList.find(
					( element ) => element.block === selectedBlock.name
				);

				registerFormatType( name, {
					edit: ( props ) => {
						if (
							isAffectedBlock &&
							! allowedFormats.includes( format.name )
						) {
							return null;
						}
						return edit( props );
					},
					...settings,
				} );
			} );
		} else {
			const activeFormats =
				selectFunc( 'core/rich-text' ).getFormatTypes();

			console.log( activeFormats, initialFormats );
			// initialFormats.forEach( ( format ) => {
			// 	const { name, settings } = format;
			// 	registerFormatType( name, settings );
			// } );
		}
	}, [ selectedBlock, initialFormats ] );

	return null;
};

registerPlugin( 'block-developers-cookbook-managing-formats-allowed-format', {
	render: RemoveFormats,
} );
