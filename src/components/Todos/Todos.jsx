import React from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import './Todos.scss';

const Todos = ({
	todos,
	todoText,
	onGetTodoText,
	onAddTodo,
	onDeleteTodo,
	onCompleteTodo,
	onClearCompleteTodo,
}) => {
	return (
		<div className="todos">
			<TodoInput
				todoText={todoText}
				onGetTodoText={onGetTodoText}
				onAddTodo={onAddTodo}
			/>
			<TodoList
				todos={todos}
				onDeleteTodo={onDeleteTodo}
				onCompleteTodo={onCompleteTodo}
				onClearCompleteTodo={onClearCompleteTodo}
			/>
		</div>
	);
};

export default Todos;
