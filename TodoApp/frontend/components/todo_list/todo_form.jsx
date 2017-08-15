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
    const todo = Object.assign({}, this.state, {done: false});
    this.props.createTodo(todo)
      .then(() => this.setState({title: '', body: ''}))
      .then(() => this.props.clearErrors());
  }

  render(){
    return (
      <div>
        <form onSubmit={ this.addTodo }>
          <label> Title
            <input type='text'
                   onChange={this.handleChange('title')}
                   value={this.state.title}>
            </input>
          </label>
          <p> { this.props.errors } </p>
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
