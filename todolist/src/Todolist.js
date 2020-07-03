import React, {Component} from 'react'; 

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

    render() {

        let bulletedtodos = this.state.todos.map((e,i) =>{
            return (
                <li key={i}>{e}</li>
            );
        });

        return(
            <div className="Todolist">
                <div className="jumbotron jumbotron-fluid" >
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