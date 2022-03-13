import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import { initialTodos } from './initialTodos';
import './App.scss';

const App = () => {
	const [todos, setTodos] = useState(initialTodos);
	const [todoText, setTodoText] = useState('');

	const getTodoTextHandler = (e) => {
		setTodoText(e.target.value);
	};

	const addTodoHandler = (e) => {
		if (todoText === '' || e.key !== 'Enter') return;

		if (e.key === 'Enter') {
			setTodos((prevTodo) => {
				return [...prevTodo, { id: uuid(), isComplete: false, task: todoText }];
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
		<>
			<Background />
			<main className="main">
				<Header />
				<Todos
					todos={todos}
					todoText={todoText}
					onGetTodoText={getTodoTextHandler}
					onAddTodo={addTodoHandler}
					onDeleteTodo={deleteTodoHandler}
					onCompleteTodo={completeTodoHandler}
					onClearCompleteTodo={clearCompleteTodoHandler}
				/>
				<span className="drag-drop">Drag and drop to reporder list</span>
			</main>
		</>
	);
};

export default App;
