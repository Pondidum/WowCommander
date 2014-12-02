var MissionList = React.createClass({

	loadFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				this.setState({missions: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	handleClick: function(id) {
		console.log("handleClick", id)
		this.setState({activeMissionID: id})
	},

	getInitialState: function() {
		return {
			activeMissionID: null,
			missions: []
		};
	},

	componentDidMount: function() {
		this.loadFromServer();
		setInterval(this.loadFromServer, this.props.interval);
	},

	render: function() {

		var items = this.state.missions.map(function(mission, i) {
			var boundClick = this.handleClick.bind(this, mission.missionID);
			return (
				<MissionItem key={mission.missionID} data={mission} active={this.state.activeMissionID} onClick={boundClick} />
			);
		}, this);

		return (
			<ul className="missionList no-bullet">
				{items}
			</ul>
		);
	}
});
