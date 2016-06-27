import React, { PropTypes } from 'react';


class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card mdl-card mdl-shadow--2dp">
        <div className="card-title" data-status={this.props.status}>{this.props.description}</div>
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-js-ripple-effect"
          onClick={this.props.onClick}
        >
          <i className="material-icons">done</i>
        </button>
      </div>);
  }
}

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Task;
