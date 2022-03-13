import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import TodoFilter from '../TodoFilter/TodoFilter';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

const TodoList = ({
	todos,
	onDeleteTodo,
	onCompleteTodo,
	onClearCompleteTodo,
}) => {
	const [filter, setFilter] = useState('All');
	const changeFilterHandler = (value) => {
		setFilter(value);
		console.log(value);
	};

	const filterTodos = todos.filter((todo) => {
		if (filter === 'All') return true;
		if (filter === 'Active' && !todo.isComplete) return true;
		if (filter === 'Completed' && todo.isComplete) return true;
		return false;
	});

	return (
		<Card>
			<ul className="todo-list">
				{filterTodos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							task={todo.task}
							id={todo.id}
							todoItem={todo}
							onDeleteTodo={onDeleteTodo}
							onCompleteTodo={onCompleteTodo}
						/>
					);
				})}
			</ul>
			<div className="todo-list__info">
				<p>
					{todos.filter((todo) => todo.isComplete === false).length} items left
				</p>
				<TodoFilter filter={filter} onChangeFilter={changeFilterHandler} />
				<button
					className="todo-list__button"
					onClick={() => onClearCompleteTodo()}
					type="button"
				>
					Clear Completed
				</button>
			</div>
		</Card>
	);
};

export default TodoList;
