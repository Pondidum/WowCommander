var MissionDetails = React.createClass({
	render: function() {

		var mission = this.props.mission;

		return (
			<span className="item" key={mission.missionID}>Details of {mission.name}</span>
		);
	}
});
