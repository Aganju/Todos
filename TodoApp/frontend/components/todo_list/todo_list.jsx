import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from  './todo_form'

export const TodoList = ({ todos, receiveTodo, removeTodo }) => {
  const allTodos = todos.map((todo, idx) => {
    return (<TodoListItem
            key = { idx }
            todo = { todo }
            receiveTodo = { receiveTodo }
            removeTodo = { removeTodo }
            />);
  });
  return (
    <div>
      <ul>
        {allTodos}
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  )
};
