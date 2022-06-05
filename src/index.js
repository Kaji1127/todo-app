import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { ThemeProvider } from './store/ThemeContext';
import TodoProvider from './store/todoContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<TodoProvider>
				<App />
			</TodoProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
