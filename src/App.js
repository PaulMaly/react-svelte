import React, { Component } from 'react';
import './App.css';

import GithubWidget from './svelte_components/GithubWidget';

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      items: [
        {id: 1, title: 'First'},
        {id: 2, title: 'Second'},
        {id: 3, title: 'Third'},
      ]
    };
  }

  handleUsername = (e) => {
    this.setState({ username: e.target.value });   
  }

  handleChange = (state) => {
    this.setState({ ...state });   
  }

  addToDo = () => {
    const id = this.state.items.length + 1;
    this.state.items.push({id, title: `Added ${id}`})
    this.setState({
      items: this.state.items
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Widget for: {this.state.username}</h1>
          <input 
            value={this.state.username} 
            onChange={this.handleUsername}
            className="Username" 
            placeholder="username or username/repo" 
          />
          <button onClick={this.addToDo}>Add todo</button>
          <GithubWidget
            onChange={this.handleChange} 
            username={this.state.username}
            items={this.state.items}
            renderItem={item => <div key={item.id}>{item.title}</div>}
          >
            <p>Hello world</p>
          </GithubWidget>
        </header>
      </div>
    );
  }
}

export default App;
