import React, {Component} from 'react'; 

// export default class SingleTodo extends Component{
//     //We will be looking at props, rather than state
//     // State is internal data while props are external data coming in from other sources/components \

//     //Props are external quantities handed to the component, the component cannot change these

//     constructor(){
//         super();
//     }

//     render(){
//         return(
//             //This props have no idea what todo is or delete is, we need the parent/Global source to send over what those variables do.
//         <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         )
//     }
// }


//FUNCTIONAL COMPONENT
//No need "this" anymore, just takes in a single parameter props
//Only accepts props and no internal state

const SingleTodo = (props) =>{
    return (
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    )
}

export default SingleTodo;