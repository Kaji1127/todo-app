import React from 'react';
import './Header.scss';
import MoonIcon from '../../assets/icon-moon.svg';

const Header = () => {
	return (
		<div className="header">
			<h1 className="header__title">ToDo</h1>
			<img className="header__img" src={MoonIcon} alt="Moon Icon" />
		</div>
	);
};

export default Header;
