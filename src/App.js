import React, { Component } from 'react';
import './App.css';

import GithubWidget from './svelte_components/GithubWidget';

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  handleUsername = (e) => {
    this.setState({ username: e.target.value });   
  }

  handleChange = (state) => {
    this.setState({ ...state });   
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
          <GithubWidget
            onChange={this.handleChange} 
            username={this.state.username}
          />
        </header>
      </div>
    );
  }
}

export default App;
