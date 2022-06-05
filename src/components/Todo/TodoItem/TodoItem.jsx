import React, { useContext } from 'react';
import Circle from '../../Circle/Circle';
import IconClear from '../../../assets/icon-cross.svg';
import './TodoItem.scss';
import { todoContext } from '../../../store/todoContext';

const TodoItem = ({ todo, onDeleteTodo }) => {
	const { id, task, isCompleted } = todo;
	const { setTodos } = useContext(todoContext);

	const completeTodoHandler = ({ id, isCompleted }) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) =>
				todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
			);
		});
	};

	return (
		<li className="todo-item">
			<input type="checkbox" id={id} />
			<Circle
				id={id}
				isCompleted={isCompleted}
				onCompleteTodo={completeTodoHandler}
				todo={todo}
			/>
			<p className={`todo-item__task ${isCompleted ? 'complete' : ''}`}>
				{task}
			</p>
			<img
				className="todo-item__clear"
				src={IconClear}
				alt="todo clear"
				onClick={() => onDeleteTodo(id)}
			/>
		</li>
	);
};

export default TodoItem;
