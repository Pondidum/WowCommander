var MissionItem = React.createClass({
	render: function() {
		return (
			<li>
				{this.props.data.name}
			</li>
		);
	}
});