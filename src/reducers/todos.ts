import { Todo, Action, ActionTypes } from '../actions';

export default (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
};
