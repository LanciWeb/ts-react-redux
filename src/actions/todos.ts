import axios from 'axios';
import { ActionTypes } from './types';
import { Dispatch, Action } from 'redux';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodoAction extends Action {
  payload: Todo[];
  type: ActionTypes.fetchTodos;
}

interface DeleteTodoAction extends Action {
  payload: number;
  type: ActionTypes.deleteToDo;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDos = () => async (dispatch: Dispatch<FetchTodoAction>) => {
  const response = await axios.get<Todo[]>(url);

  dispatch({ type: ActionTypes.fetchTodos, payload: response.data });
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.deleteToDo,
  payload: id
});
