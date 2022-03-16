import React from 'react';
import deleteIcon from '../../../assets/icon-cross.svg';
import './TodoItem.scss';

const TodoItem = ({ todo, id, task, onDeleteTodo, onCompleteTodo }) => {
	return (
		<>
			<li className="todo-item">
				<input defaultChecked={todo.isComplete} id={id} type="checkbox" />
				<label
					className="checked"
					onClick={() => onCompleteTodo(todo)}
					htmlFor={id}
				></label>
				<p
					className={`todo-item__text ${
						todo.isComplete && 'todo-item__text--complete'
					}`}
				>
					{task}
				</p>
				<img
					onClick={() => onDeleteTodo(id)}
					src={deleteIcon}
					alt="Delete Icon"
					className="todo-item__delete desktop"
				/>
			</li>
		</>
	);
};
export default TodoItem;
