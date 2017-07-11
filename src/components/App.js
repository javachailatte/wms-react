import React, { Component } from 'react';
import LinkButton from "./LinkButton";

class App extends Component {
  render() {
    return (
        <LinkButton
            to={process.env.PUBLIC_URL + '/login'}
            label="GO TO LOGIN"
        />
    );
  }
}

export default App;
