import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const todosReducer = ( state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach( (todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      return Object.assign({}, state, { [action.todo.id]: action.todo});
    case REMOVE_TODO:
      debugger
      const updatedState = Object.assign({}, state);
      delete updatedState[action.todo.id];
      return updatedState;
    default:
      return state;
  }
};

export default todosReducer;
