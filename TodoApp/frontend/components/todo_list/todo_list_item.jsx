import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
    this.flipStatus = this.flipStatus.bind(this);
  }

  remove(){
    this.props.deleteTodo(this.props.todo);
  }

  flipStatus(){
    // debugger
    this.props.updateTodo(
      Object.assign({},
      this.props.todo,
      {done: !this.props.todo.done }
    ));
  }

  render(){
    const doneStatus = this.props.todo.done ? 'Undo' : 'Done';
    return (
      <li className='todo'>
        {this.props.todo.title}
        <div className = "buttons">
          <button type="button" className='btn done_btn' onClick={this.flipStatus}>{doneStatus}</button>
          <button type="button"  className='btn delete_btn' onClick={this.remove}>Delete</button>
        </div>
    </li>

    );
  }
}

export default TodoListItem;
