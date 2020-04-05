import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import '../App.css';
import TableData from './Coldef';
import ActionCellRenderer from './ActionCellRender';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class TableComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colDefs: []
		};
	}

	componentDidMount() {
		const { columnDefs } = this.props;
		const newColDefs =
			columnDefs &&
			columnDefs.map((colDef) => {
				if (colDef.cellRendererFramework) {
					const cellRenderer = this.customCellRenderHandler(colDef.cellRendererFramework, colDef.field);
					return {
						...colDef,
						cellRendererFramework: cellRenderer.component,
						cellRendererParams: cellRenderer.params
					};
				}
				return colDef;
			});
		// eslint-disable-next-line react/no-did-mount-set-state
		this.setState({
			colDefs: newColDefs
		});
	}

	customCellRenderHandler = (frameWorkName, colType) => {
		const { actionButtonClickListenerOne } = this.props;
		switch (frameWorkName) {
			case 'ActionCellRenderer':
				return {
					component: ActionCellRenderer,
					params: {
						actionButtonClickListenerOne
					}
				};
			default:
				return <div>"No Custom Component Has Been Made"</div>;
		}
	};

	render() {
		let { colDefs } = this.state;
		return (
			<div
				className="ag-theme-balham table-align container"
				style={{
					height: '150px',
					width: '796px',
					marginLeft: '18rem',
					marginTop: '1rem'
				}}
			>
				<AgGridReact
					columnDefs={colDefs}
					rowData={TableData.rowData}
					frameworkComponents={{ ActionCellRenderer }}
				/>
			</div>
		);
	}
}

export default TableComponent;
