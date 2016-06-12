import React, { PropTypes } from 'react';
import Task from './task.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-cards">
        {this.props.tasks.map(task =>
          <Task
            key={task.id}
            {...task}
            onClick={() => this.props.onTaskClick(task.id)}
          />
        )}
      </div>);
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired
};

export default TaskList;
