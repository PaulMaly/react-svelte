import React, { PureComponent } from 'react';

import Widget from './Widget.svelte';

export default class extends PureComponent {

  componentDidMount() {

    const { username } = this.props;
    
    this.widget = new Widget({
      target: this.el,
      data: { username }
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
      <div ref={el => this.el = el}></div>
    );
  }
}