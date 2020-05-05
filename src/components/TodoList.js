import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


const TodoList = props => {
    // console.log(props)
//   var toggle = (id) => {
//        const newList = this.state.todos.map 
//        (todo => {
//             if (todo.id === id) {
//               return {
//                 name: todo.name,
//                 id: todo.id,
//                 done: !todo.done,
//               }
//             } else {
//               return newList;
//             }
//           })
//           this.setState({
//               todos:newList
//           })
//       }

      return (
        <div className="todoList">
         {props.todos.map( item => (
             <Todo key={item.id} item={item} toggle={props.toggle}
             />
         ))}
         <p>{props.todos.name}</p>
          <button className='clear' onClick={props.removeTodos}>Clear</button>
          </div>

      );
  }
  
  export default TodoList;