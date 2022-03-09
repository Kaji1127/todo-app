import React from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import TodoFilter from './TodoFilter/TodoFilter';
import './Todos.scss';

const Todos = () => {
	return (
		<div className="todos">
			<h1 className="heading">Hello World!!</h1>
			<TodoInput />
			<TodoList />
			<TodoFilter />
		</div>
	);
};

export default Todos;
