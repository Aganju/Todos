import { connect } from 'react-redux';
import { TodoDetailView } from './todo_list';
import {removeTodo } from '../../actions/todo_actions.js';

function mapDispatchToProps(dispatch){
  return {
    removeTodo: (todo) => dispatch(removeTodo(todo))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
