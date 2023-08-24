/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as coreEditorStore } from '@wordpress/editor';
import { useEffect } from '@wordpress/element';
/**
 * Internal Dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const postType = useSelect(
		( select ) => select( coreEditorStore ).getCurrentPostType(),
		[]
	);
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
	const { editPost } = useDispatch( coreEditorStore );
	const { firstName, lastName } = meta;

	useEffect( () => {
		editPost( { title: `${ firstName } ${ lastName }` } );
	}, [ firstName, lastName ] );

	return (
		<p { ...useBlockProps() }>
			<RichText
				value={ firstName }
				onChange={ ( newFirstName ) => {
					setMeta( {
						...meta,
						firstName: newFirstName,
					} );
				} }
				disableLineBreaks={ true }
			/>
			<RichText
				value={ lastName }
				onChange={ ( newLastName ) => {
					setMeta( {
						...meta,
						lastName: newLastName,
					} );
				} }
				disableLineBreaks={ true }
			/>
		</p>
	);
}
