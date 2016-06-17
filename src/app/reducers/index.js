import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import tasks from './tasks';

const taskApp = combineReducers({
  visibilityFilter,
  tasks
});

export default taskApp;
