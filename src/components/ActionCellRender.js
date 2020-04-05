import React from 'react';

class ActionCellRenderer extends React.Component {
	render() {
		return (
			<div onClick={() => this.props.actionButtonClickListenerOne(this.props.data)}>
				<span>
					<i className="fa fa-info-circle" aria-hidden="true" />
				</span>
			</div>
		);
	}
}

export default ActionCellRenderer;
