import React from 'react';

const Todo = props => {
  
  return (
    <div onClick={() => props.toggle(props.item.id)}
     
     style={{textDecoration: props.item.done ? 'line-through' : ""}}>

      <p>{props.item.name}</p>
    </div>
    
  );
};

export default Todo;
