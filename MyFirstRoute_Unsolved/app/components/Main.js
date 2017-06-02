var React = require("react");

var ComponentName = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h2><strong>Which Child???</strong></h2>
					<p><em>A journey through the whimsical world of React Routing</em></p>
					<hr>
					<p>
						<a class="btn btn-primary btn-lg">Show Child #1</a>
						<a class="btn btn-danger btn-lg">Show Child #2</a>
					</p>
				</div>
			</div>
		);
	}
});