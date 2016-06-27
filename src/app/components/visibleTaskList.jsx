import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskList from './taskList.jsx';

const getVisibleTasks = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.status === 'done');
    case 'SHOW_ACTIVE':
      return todos.filter(t => t.status === 'done');
    default:
      return [];
  }
};

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onTaskClick: (id) => {
    dispatch(toggleTask(id));
  }
});

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default VisibleTaskList;
