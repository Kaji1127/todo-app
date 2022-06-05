import React, { useContext, useState } from 'react';
import TodoFunc from './TodoFunc/TodoFunc';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import { todoContext } from '../../store/todoContext';
import TodoItem from './TodoItem/TodoItem';

const Todo = () => {
	const { todos, setTodos } = useContext(todoContext);

	const [filter, setFilter] = useState('All');

	const onFilterChangeHandler = (filter) => {
		setFilter(filter);
	};

	const filteringTodos = todos?.filter((todo) => {
		if (filter === 'All') return true;
		if (filter === 'Active' && !todo.isCompleted) return true;
		if (filter === 'Completed' && todo.isCompleted) return true;
		return false;
	});

	const deleteTodoHandler = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	const todoItems = filteringTodos?.map((item) => {
		return (
			<TodoItem key={item.id} todo={item} onDeleteTodo={deleteTodoHandler} />
		);
	});

	return (
		<div className="flex-column">
			<TodoInput />
			<TodoList todoItems={todoItems} filter={filter} />
			<TodoFunc onFilterChange={onFilterChangeHandler} filter={filter} />
		</div>
	);
};

export default Todo;
