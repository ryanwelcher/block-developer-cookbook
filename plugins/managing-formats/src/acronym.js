// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { registerFormatType } from '@wordpress/rich-text';

/**
 * Internal dependencies
 */
import './editor.scss';
import { name, acronymFormat } from './acronym-edit';

registerFormatType( name, acronymFormat );
