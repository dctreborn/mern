var React = require("react");

var History = React.createClass({
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title text-center">Search History</h3>
                </div>
                <div className="panel-body text-center">
                <p>{this.props.searchTerm} - {this.props.timestamp}</p>
                </div>
            </div>
        );
    }
});

module.exports = History;