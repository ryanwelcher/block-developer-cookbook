// WordPress dependencies.
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Popover, TextControl } from '@wordpress/components';
import { applyFormat, removeFormat, useAnchor } from '@wordpress/rich-text';

/**
 * Internal dependencies
 */
import Icon from './icon';

// The name of the format type.
export const name = 'block-developer-cookbook/acronym';

// The format type definition.
export const acronymFormat = {
	title: __( 'Acronym', 'block-developer-cookbook' ),
	tagName: 'abbr',
	className: 'bdc-acronym',
	edit: AcronymEdit,
};

/**
 * This is the main edit component for the acronym format type.
 */
function AcronymEdit( { isActive, onChange, value, contentRef } ) {
	const [ isPopoverVisible, setIsPopoverVisible ] = useState( false );

	const togglePopover = () => setIsPopoverVisible( ( state ) => ! state );

	return (
		<>
			<RichTextToolbarButton
				icon={ Icon }
				title={ __( 'Acronym', 'block-developer-cookbook' ) }
				isActive={ isActive }
				onClick={ () => togglePopover() }
			/>
			{ isPopoverVisible && (
				<AcronymPopover
					value={ value }
					onChange={ onChange }
					onClose={ togglePopover }
					contentRef={ contentRef }
				/>
			) }
		</>
	);
}

/**
 * This component handles the Popover for the acronym format type.
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
