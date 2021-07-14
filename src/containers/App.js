import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Main, Bank, Interest} from '../pages'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component = {Main} />
        <Route path="/bank" component={Bank} />
        <Route path="/interest" component={Interest} />
      </div>
    );
  }
}

export default App;
