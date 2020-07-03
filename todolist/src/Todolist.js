import React, {Component} from 'react'; 

import SingleTodo from "./SingleTodo"

class Todolist extends Component{
    constructor(){
        super();
        this.state = {
            todos : [],
            currentTodo: ''
        }
    };

    onInputChange = e => {
        this.setState({
            currentTodo: e.target.value
        });
    }

    onClick = () => {
        let todoscopy = this.state.todos.slice();
        todoscopy.push(this.state.currentTodo);

        this.setState({
            todos: todoscopy,
            currentTodo : ""
        });
    }

    deleteTodo = i => {
        let todoscopy = this.state.todos.slice();

        todoscopy.splice(i,1);

        this.setState({
            todos: todoscopy
        });
    }

    render() {

        let bulletedtodos = this.state.todos.map((e,i) =>{
            return (
                // <li key={i}>{e}<button style={{margin: "20px"}} onClick={() => this.deleteTodo(i)} >X</button></li>
                <SingleTodo todo={e} delete={() => this.deleteTodo(i)} />
            );
        });

        return(
            <div className="Todolist">
                <div className="jumbotron jumbotron-fluid" style={{backgroundColor:"white"}} >
                    <div className="container">
                    <h1 className="display-4">To Do List</h1>
                    <p className="lead">Plan your day</p>
                    </div>
                    <input placeholder="Enter todo" value={this.state.currentTodo} onChange={this.onInputChange}/>
                    <button onClick={this.onClick}>Add</button>

        {this.state.todos.length === 0 ? "No Tasks Yet" : <ul>{bulletedtodos}</ul>}


                </div>
            </div>
        )
    };
}

export default Todolist;