
import * as ApiUtil from '../util/todo_api_util.js';
import { receiveErrors } from './error_actions.js';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = (todo) => {
  debugger
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    return ApiUtil.getTodos().then((todos) => dispatch(receiveTodos(todos)));
  };
};

export const createTodo = (todo) => {
  return (dispatch) => {
    return ApiUtil.createTodo(todo)
      .then(
        (todo) => dispatch(receiveTodo(todo)),
        (errs) => dispatch(receiveErrors(errs.responseJSON))
      );
  };
};

export const updateTodo = (todo) => {
  return (dispatch) => {
    return ApiUtil.updateTodo(todo)
      .then(
        (todo) => dispatch(receiveTodo(todo)),
        (errs) => dispatch(receiveErrors(errs.responseJSON))
      );
  };
};

export const deleteTodo = (originalTodo) => {
  return (dispatch) => {
    return ApiUtil.deleteTodo(originalTodo)
      .then(
        (todo) => dispatch(removeTodo(originalTodo)),
        (errs) => dispatch(receiveErrors(errs.responseJSON))
      );
  };
};
