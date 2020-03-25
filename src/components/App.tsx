import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from '../reducers';
import { fetchToDos, Todo } from '../actions';
interface AppProps {
  todos: Todo[];
  fetchToDos: () => void;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  componentDidMount = () => {
    this.props.fetchToDos();
  };

  listTodo = (todos: Todo[]): JSX.Element => (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );

  render() {
    return <div>{this.listTodo(this.props.todos)}</div>;
  }
}
const mapStateToProps = (state: ReduxState): { todos: Todo[] } => {
  const { todos } = state;
  return { todos };
};
const mapDispatchToProps = { fetchToDos };
export default connect(mapStateToProps, mapDispatchToProps)(App);
