import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import '../App.css';
import TableData from './PopColdef';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Modal } from 'react-bootstrap';
class PopupTable extends Component {
	state = {};
	render() {
		let { data } = this.props;
		return (
			<div>
				<Modal
					show={this.props.showModal}
					id="lineModal"
					size="lg"
					onHide={this.props.hideModal}
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Body>
						<div className="">
							<div className="row">
								<div className="col-md-4">
									<p className="color-blue font-size-14 font-bold">Sessions Log</p>
								</div>
								<div className="col-md-8 text-right">
									<button
										type="button"
										className="btn btn-close-m create-down"
										style={{ marginTop: '-7px' }}
										onClick={this.props.hideModal}
									>
										{' '}
										<i className="fa fa-close" aria-hidden="true" />
									</button>
								</div>
							</div>
							<div
								className="ag-theme-balham table-align container"
								style={{
									height: '150px',
									width: '800px'
								}}
							>
								<AgGridReact columnDefs={TableData.columnDefs} rowData={data} />
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default PopupTable;
