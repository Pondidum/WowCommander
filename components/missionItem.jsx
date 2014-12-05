var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var MissionItem = React.createClass({
	render: function() {

		var mission = this.props.data;
		var rewards = mission.rewards.map(function(reward) {
			return (
				<li>{reward.id}</li>
			);
		});

		var isActive = (this.props.active === mission.missionID);

		return (
			<li>
				<div className="missionItem" onClick={this.props.onClick}>
					<div>
						<span className="name">{mission.name}</span>
						<span className="level">{mission.level}</span>
						<span className="ilvl">{mission.iLevel}</span>
						<span className="duration">{mission.duration}</span>
					</div>
					<ul className="rewards">{rewards}</ul>
				</div>
				<CSSTransitionGroup transitionName="missionDetails">
					{ isActive ? <MissionDetails mission={mission} /> : null }
				</CSSTransitionGroup>
			</li>
		);
	}
});
