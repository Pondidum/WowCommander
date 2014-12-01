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

	getInitialState: function() {
		return { missions: [] };
	},

	componentDidMount: function() {
		this.loadFromServer();
		setInterval(this.loadFromServer, this.props.interval);
	},

	render: function() {

		var missions = this.state.missions.map(function(mission) {
			return (
				<MissionItem key={mission.id} data={mission} />
			);
		});

		return (
			<ul className="missionList no-bullet">
				{missions}
			</ul>
		);
	}
});
