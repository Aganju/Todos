import React from 'react';
import TodoListItem from './todo_list_item';

export const TodoList = ({ todos }) => {
  debugger
  const allTodos = todos.map((todo) => {
    return (<TodoListItem todo = {todo} />);
  });
  return (
    <ul>
      {allTodos}
    </ul>
  )
};


// export const TodoList = ({ todos }) => {
//   // debugger
//   const allTodos = todos.map((todo) => {
//     return (<li> {todo.title} </li>);
//   });
//   return (
//     <ul>
//       {allTodos}
//     </ul>
//   )
// };
