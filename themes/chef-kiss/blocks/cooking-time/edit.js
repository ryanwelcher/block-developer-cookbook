/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEntityRecord } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {
	attributes,
	setAttributes,
	context: { postType, postId },
} ) {
	const blockProps = useBlockProps();

	const {
		record: { meta },
	} = useEntityRecord( 'postType', postType, postId );
	console.log( meta );
	return (
		<p { ...blockProps }>
			{ __( 'Prep Time: ', 'bdc' ) }
			<span className="number-value">
				{ `${ meta?.time } minutes` || 'N/A' }
			</span>
		</p>
	);
}
