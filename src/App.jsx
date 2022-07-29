import React from 'react';
import Background from './components/Background/Background';
import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';

import './App.scss';

const App = () => {
	return (
		<>
			<Background />
			<main className="container flex-column">
				<Title />
				<Todo />
			</main>
		</>
	);
};

export default App;
