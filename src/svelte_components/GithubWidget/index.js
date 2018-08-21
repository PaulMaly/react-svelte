import React, { PureComponent } from 'react';

import Widget from './Widget.svelte';

export default class extends PureComponent {

  componentDidMount() {

    const { username } = this.props;

    console.log(this.props.children);
    
    this.widget = new Widget({
      target: this.el,
      data: { username },
      slots: {
        default: this.slot,
        todo: this.todo
      }
    });

    this.widget.on('state', ({ current: { username }, changed }) => {
        if (changed.username) {
          this.props.onChange({ username });
        } 
    });
  }
  
  componentWillReceiveProps({ username }) {
    this.widget.set({ username });
  }

  componentWillUnmount() {
    this.widget.destroy();
  }
  
  render() {
    return (
      <div ref={el => this.el = el}>
        <div ref={el => this.slot = el}>
          {this.props.children}
        </div>
        <div ref={el => this.todo = el} className="todo">
          <h2>{this.props.title}</h2>
          {this.props.items.map(item => this.props.renderItem(item))}
        </div>
      </div>
    );
  }
}