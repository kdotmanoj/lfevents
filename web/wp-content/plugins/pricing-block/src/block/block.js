/**
 * BLOCK: pricing-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { PlainText, InspectorControls, ColorPalette } = wp.blockEditor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-pricing-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Pricing Block' ), // Block title.
	icon: 'calendar', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	supports: {
		align: ['full']
	},
	attributes: {
		topLabels: {
			type: 'array',
			default: ['Early Bird', 'Standard', 'Late', 'Onsite']
		},
		dates: {
			type: 'array',
			default: ['2020/05/01', '2020/06/01', '2020/07/01', '2020/08/01', '2020/09/01']
		},
		leftLabels: {
			type: 'array',
			default: ['Corporate', 'Individual', 'Academic']
		},
		prices: {
			type: 'array',
			default: [['$ 1,050', '$ 500', '$ 150'], ['$ 1,250', '$ 600', '$ 150'], ['$ 1,450', '$ 700', '$ 150'], ['$ 1,550', '$ 800', '$ 150']]
		},
		align: {
			type: 'string',
			default: 'full'
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		const { setAttributes, attributes: { topLabels, dates, leftLabels, prices }} = props;
		
		function updateTopLabels(value, index) {
			const newTopLabels = [...topLabels];
			newTopLabels[index] = value;
			setAttributes( {topLabels: newTopLabels});
		}
		function updateLeftLabels(value, index) {
			const newLeftLabels = [...leftLabels];
			newLeftLabels[index] = value;
			setAttributes( {leftLabels: newLeftLabels});
		}
		function updateDates(value, index) {
			const newDates = [...dates];
			newDates[index] = value;
			setAttributes( {dates: newDates});
		}
		function updatePrices(value, indexX, indexY) {
			const newPrices = [...prices];
			newPrices[indexX][indexY] = value;
			setAttributes( {prices: newPrices});
		}

		return (
			<div className={ props.className }>
				<h3>Event Pricing Table</h3>
				<p>Fill in the rows and columns as appropriate for the Event and leave the remaining ones empty.</p>
				<table>
					<tr>
						<td></td>
						<td>
							<PlainText
								value={ topLabels[0] }
								onChange={ value => updateTopLabels(value, 0)}
							/>
						</td>
						<td>
							<PlainText
								value={ topLabels[1] }
								onChange={ value => updateTopLabels(value, 1)}
							/>
						</td>
						<td>
							<PlainText
								value={ topLabels[2] }
								onChange={ value => updateTopLabels(value, 2)}
							/>
						</td>
						<td>
							<PlainText
								value={ topLabels[3] }
								onChange={ value => updateTopLabels(value, 3)}
							/>
						</td>
					</tr>
					<tr>
						<td>Ticket sales open
							<PlainText
								value={ dates[0] }
								onChange={ value => updateDates(value, 0)}
							/>
						</td>
						<td>End of first round
							<PlainText
								value={ dates[1] }
								onChange={ value => updateDates(value, 1)}
							/>
						</td>
						<td>End of second round
							<PlainText
								value={ dates[2] }
								onChange={ value => updateDates(value, 2)}
							/>
						</td>
						<td>End of third round
							<PlainText
								value={ dates[3] }
								onChange={ value => updateDates(value, 3)}
							/>
						</td>
						<td>End of fourth round
							<PlainText
								value={ dates[4] }
								onChange={ value => updateDates(value, 4)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<PlainText
								value={ leftLabels[0] }
								onChange={ value => updateLeftLabels(value, 0)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[0][0] }
								onChange={ value => updatePrices(value, 0, 0)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[1][0] }
								onChange={ value => updatePrices(value, 1, 0)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[2][0] }
								onChange={ value => updatePrices(value, 2, 0)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[3][0] }
								onChange={ value => updatePrices(value, 3, 0)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<PlainText
								value={ leftLabels[1] }
								onChange={ value => updateLeftLabels(value, 1)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[0][1] }
								onChange={ value => updatePrices(value, 0, 1)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[1][1] }
								onChange={ value => updatePrices(value, 1, 1)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[2][1] }
								onChange={ value => updatePrices(value, 2, 1)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[3][1] }
								onChange={ value => updatePrices(value, 3, 1)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<PlainText
								value={ leftLabels[2] }
								onChange={ value => updateLeftLabels(value, 2)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[0][2] }
								onChange={ value => updatePrices(value, 0, 2)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[1][2] }
								onChange={ value => updatePrices(value, 1, 2)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[2][2] }
								onChange={ value => updatePrices(value, 2, 2)}
							/>
						</td>
						<td>
							<PlainText
								value={ prices[3][2] }
								onChange={ value => updatePrices(value, 3, 2)}
							/>
						</td>
					</tr>
				</table>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return null // See PHP side. This block is rendered on PHP.
	},
} );
