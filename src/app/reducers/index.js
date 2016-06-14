import { combineReducers } from 'redux';
import * as reducers from './reducers';

const taskApp = combineReducers(reducers);

export default taskApp;
