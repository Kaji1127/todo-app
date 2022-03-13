import React from 'react';
import deleteIcon from '../../../assets/icon-cross.svg';
import './TodoItem.scss';

const TodoItem = ({ todoItem, id, task, onDeleteTodo, onCompleteTodo }) => {
	return (
		<>
			<li className="todo-item">
				<input defaultChecked={todoItem.isComplete} id={id} type="checkbox" />
				<label
					className="checked"
					onClick={() => onCompleteTodo(todoItem)}
					htmlFor={id}
				></label>
				<p
					className={`todo-item__text ${
						todoItem.isComplete && 'todo-item__text--complete'
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
