import React from 'react';

class TodoForm extends React.Component {
    constructor () {
        super();
        this.state = {
         keyword: '',   
        };
    }

    change = event => {
        this.setState(
            {
                keyword: event.target.value,
            },
        );
    };

    submitForm = event => {
        event.preventDefault();
        this.props.addTodo(this.state.keyword);
        this.setState({
            keyword: '',
        });
    };
  
    render() {
      return (
        <form onSubmit={this.submitForm}>
          <input onChange= {this.change} type= 'text' name= 'item' value={this.state.keyword} />
        
          <button>Add</button>
        </form>
      );
    }
  }
  
  export default TodoForm;