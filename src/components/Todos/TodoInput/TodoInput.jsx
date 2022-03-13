import React from 'react';
import Card from '../../UI/Card/Card';
import './TodoInput.scss';

const TodoInput = ({ todoText, onGetTodoText, onAddTodo }) => {
	// console.log(todoText, onGetTodoText);
	return (
		<>
			<Card>
				<div className="todo-input__container">
					<input type="checkbox" id="check" />
					<label htmlFor="check"></label>
					<input
						onChange={onGetTodoText}
						onKeyPress={onAddTodo}
						type="text"
						value={todoText}
						placeholder="Create a new todo..."
					/>
				</div>
			</Card>
		</>
	);
};

export default TodoInput;
