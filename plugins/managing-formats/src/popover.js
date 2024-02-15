/**
 * WordPress dependencies
 */
import { Popover, TextControl } from '@wordpress/components';
import { applyFormat, removeFormat, useAnchor } from '@wordpress/rich-text';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { acronymFormat, name } from './acronym';

/**
 * This component handles the Popover for the acronym format type.
 *
 * @param {Object}   props            The component props.
 * @param {Object}   props.value      The value of the rich text.
 * @param {Object}   props.contentRef Reference to the editable content.
 * @param {Function} props.onChange   Function to apply the format.
 * @param {Function} props.onClose    Function to close the popover.
 *
 * @return {WPElement} Element to render.
 */
function AcronymPopover( { value, contentRef, onChange, onClose } ) {
	const popoverAnchor = useAnchor( {
		editableContentElement: contentRef.current,
		settings: acronymFormat,
	} );

	const activeFormat = value.activeFormats?.find(
		( format ) => format.type === name
	);

	const titleAtt =
		activeFormat?.attributes?.title ||
		activeFormat?.unregisteredAttributes?.title ||
		'';

	const [ title, setTitle ] = useState( titleAtt );

	const onFormSubmit = ( event ) => {
		event.preventDefault();
		if ( title.length ) {
			onChange(
				applyFormat( value, {
					type: name,
					attributes: { title },
				} )
			);
		} else {
			onChange( removeFormat( value, name ) );
		}
		onClose();
	};

	return (
		<Popover
			className="bdc-format-popover"
			anchor={ popoverAnchor }
			placement="bottom"
			onClose={ onClose }
			variant="toolbar"
		>
			<form
				className="bdc-format-popover__form"
				onSubmit={ onFormSubmit }
			>
				<TextControl
					label={ __(
						'Define the acronym',
						'block-developer-cookbook'
					) }
					value={ title }
					onChange={ ( val ) => setTitle( val ) }
					help={ __(
						'Explain the acronym in a few words. This will be used as the title attribute for the abbreviation tag.',
						'block-developer-cookbook'
					) }
				/>
			</form>
		</Popover>
	);
}

export default AcronymPopover;
