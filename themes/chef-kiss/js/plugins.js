/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

registerPlugin( 'chef-kiss', {
	render: () => {
		const postType = useSelect(
			( select ) => select( 'core/editor' ).getCurrentPostType(),
			[]
		);

		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

		switch ( postType ) {
			case 'recipe':
				return (
					<PluginDocumentSettingPanel
						title={ __( 'Recipe Details', 'chef-kiss' ) }
					>
						<NumberControl
							label={ __(
								'Time to complete (mins)',
								'chef-kiss'
							) }
							value={ meta?.time }
							onChange={ ( value ) =>
								setMeta( { ...meta, time: value } )
							}
						/>
						<NumberControl
							label={ __( 'Skill level (1-3)', 'chef-kiss' ) }
							min={ 1 }
							max={ 3 }
							value={ meta?.level || 1 }
							onChange={ ( value ) =>
								setMeta( { ...meta, level: value } )
							}
						/>
					</PluginDocumentSettingPanel>
				);
			case 'page':
				return (
					<PluginDocumentSettingPanel
						title={ __( 'Conference Details', 'chef-kiss' ) }
					>
						<NumberControl
							label={ __( 'Available time (mins)', 'chef-kiss' ) }
							value={ meta?.duration }
							onChange={ ( value ) =>
								setMeta( { ...meta, duration: value } )
							}
						/>
					</PluginDocumentSettingPanel>
				);
			default:
				return null;
		}
	},
} );
