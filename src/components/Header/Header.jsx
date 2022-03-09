import React from 'react';
import './Header.scss';
import MoonIcon from '../../assets/icon-moon.svg';

const Header = () => {
	return (
		<div className="header">
			<h1>To Do</h1>
			<img src={MoonIcon} alt="Moon Icon" />
		</div>
	);
};

export default Header;
