import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodoAction {
  payload: Todo[];
  type: ActionTypes;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDo = () => async (dispatch: Dispatch<FetchTodoAction>) => {
  const response = await axios.get<Todo[]>(url);

  dispatch({ type: ActionTypes.fetchTodos, payload: response.data });
};
