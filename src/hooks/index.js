/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

function addIsValueAttribute( settings, name ) {
	if ( 'core/buttons' === name ) {
		return {
			...settings,
			attributes: {
				...settings.attributes,
				blockIsValid: {
					type: 'boolean',
					default: true,
				},
			},
		};
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'block-developer-cookbook/add-is-valid-attribute',
	addIsValueAttribute
);

const withClientIdClassName = ( BlockListBlock ) => {
	return ( props ) => {
		const {
			block: { name },
		} = props;
		if ( name === 'core/buttons' ) {
			const classes = props.attributes.blockIsValid ? 'valid' : 'invalid';
			return <BlockListBlock { ...props } className={ classes } />;
		}
		return <BlockListBlock { ...props } />;
	};
};

addFilter(
	'editor.BlockListBlock',
	'my-plugin/with-client-id-class-name',
	withClientIdClassName
);

registerPlugin( 'block-developers-cook', {
	render: () => {
		const AllBlocks = useSelect( ( select ) =>
			select( 'core/block-editor' ).getBlocks()
		);

		const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

		const {
			lockPostSaving,
			unlockPostSaving,
			enablePublishSidebar,
			disablePublishSidebar,
		} = useDispatch( 'core/editor' );

		const buttonsBlocks = AllBlocks?.filter(
			( block ) => block.name === 'core/buttons'
		);

		const firstButtonsBlock = buttonsBlocks[ 0 ];

		const isValid = firstButtonsBlock?.innerBlocks.every(
			( block ) =>
				block.attributes?.text && block.attributes?.text.length !== 0
		);
		console.log( isValid );

		updateBlockAttributes( firstButtonsBlock?.clientId, {
			blockIsValid: isValid,
		} );

		// if ( buttonsBlocks ) {
		// 	if ( ! isValid ) {
		// 		lockPostSaving();
		// 		disablePublishSidebar();
		// 	} else {
		// 		unlockPostSaving();
		// 		enablePublishSidebar();
		// 	}
		// }

		return (
			<PluginDocumentSettingPanel
				name="prepublish-checklist"
				title={ __( 'Test', 'pre-publish-checklist' ) }
				className="prepublish-checklist"
			>
				sdfgsdfgsdf
			</PluginDocumentSettingPanel>
		);
	},
} );
