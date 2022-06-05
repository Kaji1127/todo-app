import { createContext, useEffect, useState } from 'react';

export const todoContext = createContext([]);

const TodoProvider = ({ children }) => {
	const getTodos = () => {
		let todoItems;
		if (localStorage.getItem('todos')) {
			todoItems = JSON.parse(localStorage.getItem('todos'));
		}
		return todoItems;
	};
	const [todos, setTodos] = useState(getTodos());

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<todoContext.Provider value={{ todos, setTodos }}>
			{children}
		</todoContext.Provider>
	);
};

export default TodoProvider;
