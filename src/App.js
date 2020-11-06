import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component{
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'},
    ], 
    count: 2
  }
  deleteTodo = (id) => {
    // console.log(id);
    let count = this.state.count;
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos,
      count: count-1
    })
  }
  addTodo = (todo) => {
    let count = this.state.count +1;
    todo.id = count;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      count: count
    })
  }
  render() {
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}



export default App;
