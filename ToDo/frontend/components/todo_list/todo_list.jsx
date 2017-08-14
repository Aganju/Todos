import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from  './todo_form'

export const TodoList = ({ todos, receiveTodo }) => {
  const allTodos = todos.map((todo, idx) => {
    return (<TodoListItem  key={idx} todo = {todo} />);
  });
  return (
    <div>
      <TodoForm receiveTodo={receiveTodo}/>
      <ul>
        {allTodos}
      </ul>
    </div>
  )
};
