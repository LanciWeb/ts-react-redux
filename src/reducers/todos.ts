import { Todo } from '../actions';
import { ActionTypes } from '../actions/types';

export interface Action {
  type: ActionTypes;
  payload: any;
}

export default (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};