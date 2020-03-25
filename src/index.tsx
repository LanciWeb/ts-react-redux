import React from 'react';
import ReactDOM from 'react-dom';
interface AppProps {
  color?: string;
}
class App extends React.Component<AppProps> {
  render() {
    return <div>${this.props.color || 'hi there'}</div>;
  }
}

ReactDOM.render(<App color="red" />, document.getElementById('root'));
