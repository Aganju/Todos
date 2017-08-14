import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {title: '', body: ''};
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  addTodo(e){
    e.preventDefault();
    const todo = Object.assign({}, this.state, {done: false, id: new Date().getTime()});
    this.props.receiveTodo(todo);
    this.setState({title: '', body: ''});
  }

  render(){
    return (
      <div>
        <h2>Make New Todo</h2>
        <form onSubmit={this.addTodo}>
          <input type='text'
                 onChange={this.handleChange('title')}
                 value={this.state.title}>
          </input>
          <textarea
            onChange={this.handleChange('body')}
            value={this.state.body}>
          </textarea>
          <input type="submit" value='Create New Todo' />
        </form>
      </div>
    );
  }
}

export default TodoForm;
