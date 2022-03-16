import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import { initialTodos } from './initialTodos';
import './App.scss';

const getTheme = () => {
	let theme = 'light-theme';
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	return theme;
};

const getTodos = () => {
	let todoItems = initialTodos;
	if (localStorage.getItem('todos')) {
		todoItems = JSON.parse(localStorage.getItem('todos'));
	}
	return todoItems;
};
// localStorage.setItem('todos', JSON.stringify(todoItems));
// console.log(JSON.parse(localStorage.getItem('todos')));

const App = () => {
	const [todos, setTodos] = useState(getTodos());
	const [todoText, setTodoText] = useState('');
	const [theme, setTheme] = useState(getTheme());

	const toggleThemeHandler = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
		} else {
			setTheme('light-theme');
		}
	};

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const getTodoTextHandler = (e) => {
		setTodoText(e.target.value);
	};

	const addTodoHandler = (e) => {
		if (todoText === '' || e.key !== 'Enter') return;

		if (e.key === 'Enter') {
			setTodos((prevTodo) => {
				return [
					...prevTodo,
					{ id: uuid().toString(), isComplete: false, task: todoText },
				];
			});
			setTodoText('');
		}
	};

	const completeTodoHandler = ({ id, isComplete }) => {
		setTodos((prevTodo) => {
			return prevTodo.map((todo) =>
				todo.id === id ? { ...todo, isComplete: !isComplete } : todo
			);
		});
	};

	const deleteTodoHandler = (id) => {
		setTodos((prevTodo) => {
			return prevTodo.filter((todo) => todo.id !== id);
		});
	};

	const clearCompleteTodoHandler = () => {
		setTodos((todoItem) => {
			// console.log(todoItem);
			return todoItem.filter((todo) => todo.isComplete === false);
		});
	};

	return (
		<main className="main">
			<Background theme={theme} />
			<div className="todo">
				<Header theme={theme} onToggleTheme={toggleThemeHandler} />

				<Todos
					todos={todos}
					todoText={todoText}
					onGetTodoText={getTodoTextHandler}
					onAddTodo={addTodoHandler}
					onDeleteTodo={deleteTodoHandler}
					onCompleteTodo={completeTodoHandler}
					onClearCompleteTodo={clearCompleteTodoHandler}
				/>
			</div>
		</main>
	);
};

export default App;
