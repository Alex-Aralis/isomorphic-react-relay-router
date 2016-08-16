import React from 'react';
import { Component } from 'react';
import Relay from 'react-relay';

class App extends Component {

  render(){
    return <h1> Hello World { this.props.echo } </h1>
  }
}

export default Relay.createContainer(App, {
  fragments: {
    echo: () => Relay.QL`
      fragment on Echo {
        message
      }
    `,
  }
});
