import React from 'react';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import './App.scss';

const App = () => {
	return (
		<>
			<Background />
			<main className="main">
				<Header />
				<Todos />
				<span className="drag-drop">Drag and drop to reporder list</span>
			</main>
		</>
	);
};

export default App;
