import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Number component
import Number from './Number.js';

//Todolist component
import Todolist from './Todolist.js';

class App extends Component {

  render(){
    return (
      <div className="App">
          <Number />
          <Todolist />
      </div>
    );
  }
}

export default App;
