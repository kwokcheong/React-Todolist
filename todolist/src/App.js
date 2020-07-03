import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js'

//Page Components
import Home from './pages/Home.js'
import Todo from './pages/Todo.js'

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Number component
import Number from './Number.js';

//Todolist component
import Todolist from './Todolist.js';

class App extends Component {

  render(){
    return (
      <div className="App">
          <Router>
            <Menu/>
              <Switch>
                <Route path="/todo">
                  <Todo/>
                </Route>
                
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
