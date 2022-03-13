import React from 'react';
import './Header.scss';
import MoonIcon from '../../assets/icon-moon.svg';
import SunIcon from '../../assets/icon-sun.svg';

const Header = ({ theme, onToggleTheme }) => {
	return (
		<div className="header">
			<h1 className="header__title">ToDo</h1>
			<img
				onClick={onToggleTheme}
				className="header__img"
				src={`${theme === 'light-theme' ? MoonIcon : SunIcon}`}
				alt="Moon Icon"
			/>
		</div>
	);
};

export default Header;
