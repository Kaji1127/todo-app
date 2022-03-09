import React from 'react';
import './App.scss';
import mobileLightBackground from './assets/bg-mobile-light.jpg';
import mobileDarkBackground from './assets/bg-mobile-dark.jpg';
import desktopLightBackground from './assets/bg-desktop-light.jpg';
import desktopDarkBackground from './assets/bg-desktop-dark.jpg';
import MoonIcon from './assets/icon-moon.svg';

const App = () => {
	return (
		<>
			{/* Background */}
			<div className="background">
				<div className="background__content">
					<picture>
						<source media="(min-width: 48em)" srcSet={desktopLightBackground} />
						<img
							className="background__image"
							src={mobileLightBackground}
							alt="background"
						/>
					</picture>
				</div>
			</div>

			<main className="main">
				<div className="header">
					<h1>To Do</h1>
					<img src={MoonIcon} alt="" />
				</div>
				<div className="todos">
					<div className="todos-input">
						<h2>Create</h2>
					</div>
					<div className="todos-list">
						<h2>List</h2>
					</div>
					<div className="todos-filter">
						<h2>Filter</h2>
					</div>
				</div>
				<span className="drag-drop">Drag and drop to reporder list</span>
			</main>
		</>
	);
};

export default App;
