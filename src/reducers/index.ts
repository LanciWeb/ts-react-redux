import { Todo } from '../actions';
import todosReducer from './todos';
import { combineReducers } from 'redux';

export interface ReduxState {
  todos: Todo[];
}

export default combineReducers<ReduxState>({
  todos: todosReducer
});
