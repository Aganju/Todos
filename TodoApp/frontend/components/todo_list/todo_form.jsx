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
        <form onSubmit={this.addTodo}>
          <label> Title
            <input type='text'
                   onChange={this.handleChange('title')}
                   value={this.state.title}>
            </input>
          </label>
          <br/>
          <label> Body
            <textarea
              onChange={this.handleChange('body')}
              value={this.state.body}>
            </textarea><br/>
            <input type="submit" value='Create New Todo' />
          </label>
        </form>
      </div>
    );
  }
}

export default TodoForm;
