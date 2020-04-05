import React, { Component } from 'react';
import '../App.css';
// Importing Table Headers from Coldef File
import TableData from './Coldef';
import TableComponent from './TableComponent';
// Importing View Button Actions in  Action
// Importing Ag-Grid Css
import PopupTable from './PopupTable';
// Importing Axios for Api Call
import axios from 'axios';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableData: {},
			showModal: false,
			showModalFlag: false,
			popData: {}
		};
	}
	hideModalFlag = () => {
		this.setState({ showModalFlag: false });
	};
	componentDidMount() {
		this.getTableData(); // Calling Table Data API
	}

	getTableData = () => {
		const self = this;
		axios
			.get('http://www.mocky.io/v2/5e88bdea3100007c00d39a77') // Calling  API using MockData
			.then(function(response) {
				// handle success
				self.setState({
					tableData: response.data
				});
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};

	actionButtonClickListenerOne = (data) => {
		this.setState({
			showModalFlag: true,
			popData: [ data ]
		});
	};

	render() {
		let { tableData, popData } = this.state;
		let members = tableData && tableData.members;
		return (
			<div>
				<PopupTable
					showModal={this.state.showModalFlag}
					hideModal={() => this.hideModalFlag()}
					data={popData}
				/>
				<TableComponent
					columnDefs={TableData.columnDefs}
					rowData={members}
					actionButtonClickListenerOne={this.actionButtonClickListenerOne}
				/>
			</div>
		);
	}
}

export default Table;
