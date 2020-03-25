import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoAction {
  payload: Todo[];
  type: ActionTypes.fetchTodos;
}

export interface DeleteTodoAction {
  payload: number;
  type: ActionTypes.deleteTodo;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDos = () => async (dispatch: Dispatch<FetchTodoAction>) => {
  const response = await axios.get<Todo[]>(url);

  dispatch({ type: ActionTypes.fetchTodos, payload: response.data });
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.deleteTodo,
  payload: id
});
