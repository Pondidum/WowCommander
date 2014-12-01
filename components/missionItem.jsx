var MissionItem = React.createClass({
	render: function() {

		var mission = this.props.data;
		var rewards = mission.rewards.map(function(reward) {
			return (
				<li>{reward.id}</li>
			);
		});

		return (
			<li>
				<div className="missionItem">
					<span className="name">{mission.name}</span>
					<span className="ilvl">{mission.iLevel}</span>
					<span className="duration">{mission.duration}</span>
					<ul className="rewards">{rewards}</ul>
				</div>
			</li>
		);
	}
});