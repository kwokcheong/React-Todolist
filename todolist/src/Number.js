import React, {Component} from 'react';

class Number extends Component {

    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
  
    increment = () => {
      this.setState({
        count: this.state.count + 1
      });
    }
  
    decrement = () => {
      this.setState({
        count: this.state.count - 1
      });
    }
  
    render(){
      return (
        <div className="Number">
                <div className="jumbotron jumbotron-fluid" >
            <div className="container">
              <h1 className="display-4">Number clicker</h1>
              <p className="lead">Heyhey press this button to add one!</p>
  
              <button style={{ margin: "20px"}} onClick={this.increment}>Increment</button>
              <button onClick={this.decrement}>Decrement</button>
              <br />
              <h1>{this.state.count}</h1>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Number;