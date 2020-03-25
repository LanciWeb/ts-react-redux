import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from '../reducers';
import { fetchToDos, deleteTodo, Todo } from '../actions';
interface AppProps {
  todos: Todo[];
  fetchToDos: () => void;
  deleteTodo: (id: number) => void;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };
  deleteIconStyle = { color: 'red', cursor: 'pointer' };
  onButtonClick = (): void => {
    this.props.fetchToDos();
  };

  onDeleteClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  listTodo = (todos: Todo[]): JSX.Element => (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>
          {title}{' '}
          <span>
            <i
              className="fas fa-trash"
              style={this.deleteIconStyle}
              onClick={() => this.onDeleteClick(id)}
            />
          </span>
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        <div>{this.listTodo(this.props.todos)}</div>
      </div>
    );
  }
}
const mapStateToProps = (state: ReduxState): { todos: Todo[] } => {
  const { todos } = state;
  return { todos };
};
const mapDispatchToProps = { fetchToDos, deleteTodo };
export default connect(mapStateToProps, mapDispatchToProps)(App);
