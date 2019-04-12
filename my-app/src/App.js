import React, { Component } from 'react';
import Login from './components/Login';
import NewUser from './components/NewUser';
import Existing from './components/Existing';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/">
        
          <div>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/newUser" component={NewUser}/>
              <Route path="/existingUser" component={Existing}/>
              <Route path="/newUser" component={NewUser}/>
              <Redirect from="/" to="/login" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
