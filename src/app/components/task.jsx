import React, { PropTypes } from 'react';

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const status = this.props.completed ? 'done' : 'todo';
    return (
      <div
        className="card mdl-card mdl-shadow--2dp"
        onClick={this.props.onClick}
      >
        <div className="card-title" data-status={status}>{this.props.text}</div>
      </div>);
  }
}

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Task;
