var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var MissionDetails = React.createClass({
	render: function() {
		return (
			<ReactCSSTransitionGroup transitionName="example">
				<span>Details of {this.props.mission.name}</span>
			</ReactCSSTransitionGroup>
		);
	}
});
