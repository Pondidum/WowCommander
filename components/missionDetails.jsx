var MissionDetails = React.createClass({
	render: function() {

		var mission = this.props.mission;

		return (
			<span key={mission.missionID}>Details of {mission.name}</span>
		);
	}
});
