import React, {Component} from 'react'; 

export default class SingleTodo extends Component{
    //We will be looking at props, rather than state
    // State is internal data while props are external data coming in from other sources/components 

    constructor(){
        super();
    }

    render(){
        return(
            //This props have no idea what todo is or delete is, we need the parent/Global source to send over what those variables do.
        <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
        )
    }
}