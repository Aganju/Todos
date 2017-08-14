import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors.js';
import { TodoList } from './todo_list';
import {receiveTodo, removeTodo } from '../../actions/todo_actions.js';

function mapStateToProps(state){
  return { todos: allTodos(state)};
}

function mapDispatchToProps(dispatch){
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
