import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import { todoContext } from '../../../store/todoContext';
import './TodoInput.scss';

const TodoInput = () => {
	const { todos, setTodos } = useContext(todoContext);
	const [term, setTerm] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const id = nanoid();
		setTodos([...todos, { id: id, task: term, isCompleted: false }]);
		setTerm('');
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};
	return (
		<>
			<form className="todo-input" onSubmit={handleSubmit}>
				<div></div>
				<input
					type="text"
					placeholder="Create a new todo..."
					value={term}
					onChange={handleChange}
				/>
			</form>
		</>
	);
};

export default TodoInput;
