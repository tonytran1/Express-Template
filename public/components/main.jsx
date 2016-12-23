class HelloWorld extends React.Component {
  render() {
    return <h1>React Component</h1>;
  }
}

class Main extends React.Component {
  render() {
    return <div>
      <HelloWorld />
    </div>
  }
}

ReactDOM.render(<Main/>, document.getElementById('hello-world'));
