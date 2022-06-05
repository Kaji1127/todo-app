import React, { useContext } from 'react';
import { todoContext } from '../../../store/todoContext';
import './TodoFunc.scss';

const TodoFunc = ({ onFilterChange, filter }) => {
	const { todos, setTodos } = useContext(todoContext);
	const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
	const filterCategory = ['All', 'Active', 'Completed'];
	const clearAllCompletedTodos = () => {
		setTodos((todos) => todos.filter((todo) => todo.isCompleted === false));
	};

	return (
		<div className="todo-func">
			<div className="todo-func__left">
				<p>{incompleteTodos.length} items left</p>
			</div>
			<div className="todo-func__clear">
				<button
					className="todo-func__clear-button"
					onClick={clearAllCompletedTodos}
				>
					Clear Completed
				</button>
			</div>
			<div className="todo-func__filter">
				<div className="todo-func__filter-button">
					{filterCategory.map((category, index) => {
						return (
							<button
								key={index}
								value={category}
								onClick={() => onFilterChange(category)}
								className={`${filter === category && 'active'}`}
							>
								{category}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default TodoFunc;
