import { FetchTodoAction, DeleteTodoAction } from './todos';
export enum ActionTypes {
  fetchTodos,
  deleteToDo
}

export type Action = FetchTodoAction | DeleteTodoAction;
