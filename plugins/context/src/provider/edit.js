/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
/**
 * Internal Dependencies
 */
import './editor.scss';

export default function Edit( {
	attributes: { message },
	setAttributes,
	context: { postId, postType },
} ) {
	return (
		<>
			<RichText
				tagName="p"
				{ ...useBlockProps() }
				value={ message }
				onChange={ ( newMessage ) =>
					setAttributes( { message: newMessage } )
				}
			/>
			<InnerBlocks
				allowedBlocks={ [ 'block-developers-cookbook/consumer' ] }
				template={ [ [ 'block-developers-cookbook/consumer' ] ] }
			/>
		</>
	);
}
