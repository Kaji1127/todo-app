import React from 'react';
import './Circle.scss';

const Circle = ({ id, onCompleteTodo, todo, isCompleted }) => {
	return (
		<label
			htmlFor={id}
			className={`${isCompleted && 'checked'}`}
			onClick={() => onCompleteTodo(todo)}
		></label>
	);
};

export default Circle;
