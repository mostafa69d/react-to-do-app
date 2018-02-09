import React, { Component } from 'react';
import '../stylesheets/app.css';
import { BrowserRouter, Route, Redirect,Switch } from "react-router-dom";
import Login from './auth/Login';
import Signup from './auth/Signup';
import Dashboard from './Dashboard';
import Header from './header/Header';
import NotFound from './NotFound';
class App extends Component {
  render() {
    return( 
      <div className="body">
        <BrowserRouter>
              <div>
                  <Header/>
                  <Route   exact path="/login" component={Login}/>
                  <Route   exact path="/signup" component={Signup}/>
                  <Route   exact path="/dashboard" component={Dashboard}/>
            </div>
        </BrowserRouter>
      </div>
      );
  }
}

export default App;
