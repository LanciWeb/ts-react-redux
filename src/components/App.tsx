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
  state = { isLoading: false };
  deleteIconStyle = { color: 'red', cursor: 'pointer' };

  componentDidUpdate = (prevProps: AppProps): void => {
    if (!prevProps.todos.length && this.props.todos.length)
      this.setState({ isLoading: false });
  };

  onButtonClick = (): void => {
    this.setState({ isLoading: true });
    setTimeout(() => this.props.fetchToDos(), 2000);
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
        <br />
        {this.state.isLoading && (
          <i className="fas fa-10x fa-spin fa-spinner" />
        )}

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
