import { combineReducers } from 'redux';
import tasks from './tasks';
import visibilityFilter from './visibilityFilter';

const taskApp = combineReducers({
  tasks,
  visibilityFilter
});

export default taskApp;
