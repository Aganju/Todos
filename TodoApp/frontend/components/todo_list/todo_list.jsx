import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from  './todo_form';

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    const allTodos = this.props.todos.map((todo, idx) => {
      return (<TodoListItem
              key = { todo.id }
              todo = { todo }
              deleteTodo = { this.props.deleteTodo }
              updateTodo = { this.props.updateTodo }
              />);
    });
    return (
      <div>
        <ul id='todos'>
          {allTodos}
        </ul>
        <TodoForm
          createTodo = { this.props.createTodo }
          errors = { this.props.errors }
          clearErrors = { this.props.clearErrors }
          />
      </div>
    );
  }

}

export default TodoList;
