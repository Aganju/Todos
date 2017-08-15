import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors.js';
import TodoList  from './todo_list';
import {createTodo, deleteTodo, fetchTodos, updateTodo } from '../../actions/todo_actions.js';
import { clearErrors } from '../../actions/error_actions.js';

function mapStateToProps(state){
  return {
    todos: allTodos(state),
    errors: state.errors
  };
}

function mapDispatchToProps(dispatch){
  return {
    createTodo: (todo) => dispatch(createTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    updateTodo: (todo) => dispatch (updateTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    clearErrors: () => dispatch(clearErrors())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
