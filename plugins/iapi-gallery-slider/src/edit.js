/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 *
 * @return {Element} Element to render.
 */
export default function Edit( {
	attributes: { continous },
	setAttributes,
	...props
} ) {
	console.log( props );
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{
			className: 'slider-container',
		},
		{
			orientation: 'horizontal',
			template: [ [ 'core/cover', {} ] ],
			defaultBlock: {
				name: 'core/cover',
			},
			allowedBlocks: [ 'core/cover', 'core/image' ],
		}
	);
	return (
		<div { ...blockProps }>
			<div { ...innerBlockProps }></div>
			<InspectorControls>
				<PanelBody title={ __( 'Slider Controls' ) }>
					<ToggleControl
						label={ __( 'Continuous' ) }
						help={ __(
							'If enabled, the slider will loop back to the first slide after the last slide.'
						) }
						checked={ continous }
						onChange={ () =>
							setAttributes( { continous: ! continous } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
