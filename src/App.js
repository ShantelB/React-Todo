import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    name: "Clean Room",
    id: 1,
    done: false
  },
  {
    name: "Clean Garage",
    id: 2,
    done: false
  },
  {
    name: "Clean Kitchen",
    id: 3,
    done: false
  },
  {
    name: "Clean Living Room",
    id: 4,
    done: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTodo = todoItem => {
    const newtodo = {
      name: todoItem,
      id: Date.now(),
      done: false
    };
    this.setState({
      todos: [...this.state.todos, newtodo]
    });
  };

  clearTodo = (key) => {
    const filterTodo = this.state.todos.filter( todos => todos.key !== key);
    this.setState ({item:filterTodo})
  }

  toggle = clickedID => {
    const newList = this.state.todos.map((item) => {
      if (item.id === clickedID){
        return {
          ...item,
          done: !item.purchased
        }
      } else {
          return item;
        }
      });
  this.setState({
    todos: newList
  }); console.log(this.state)
};

removeTodos = () => {
  this.setState(state => ({
    todos: state.todos.filter(todo => !todo.done)
  }));
};


  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Todo</h1>  
        <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList todos={this.state.todos} toggle={this.toggle} removeTodos={this.removeTodos} />
      </div>
    );
  }
}

export default App;
