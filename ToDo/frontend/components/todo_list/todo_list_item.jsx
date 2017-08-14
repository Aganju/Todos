import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
    this.flipStatus = this.flipStatus.bind(this);
  }

  remove(){
    this.props.removeTodo(this.props.todo);
  }

  flipStatus(){
    // debugger
    this.props.receiveTodo(
      Object.assign({},
      this.props.todo,
      {done: !this.props.todo.done }
    ));
  }

  render(){
    const doneStatus = this.props.todo.done ? 'Undo' : 'Done';
    return (
      <li>
        {this.props.todo.title}
        <button type="button" onClick={this.remove}>Delete</button>
        <button type="button" onClick={this.flipStatus}>{doneStatus}</button>
      </li>

    );
  }
}

export default TodoListItem;
