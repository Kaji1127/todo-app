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

			<span className="drag-drop">Drag and drop to reporder list</span>
		</div>
	);
};

export default Todos;
