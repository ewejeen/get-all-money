import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, Bank, Interest, Search, Special, BankList } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component = {Main} />
        <Route path="/bank" 
              render={() => <Bank search={<Search />} banklist={<BankList /> }/> }/>
        <Route path="/interest" component={Interest} />
        <Route path="/special" component={Special}/>
      </div>
    );
  }
}

export default App;
