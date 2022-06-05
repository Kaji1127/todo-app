import React, { useContext, useState, useEffect } from 'react';
import SunIcon from '../../assets/icon-sun.svg';
import MoonIcon from '../../assets/icon-moon.svg';
import ThemeContext from '../../store/ThemeContext';
import './Title.scss';

const Title = () => {
	const themeCtx = useContext(ThemeContext);
	const theme = themeCtx.state.theme;

	const [appTheme, setAppTheme] = useState(theme);

	useEffect(() => {
		document.documentElement.className = appTheme;
	}, [appTheme]);

	const toggleThemeHandler = () => {
		if (theme === 'dark-theme') {
			themeCtx.dispatch({ type: 'LIGHT_THEME' });
			document.documentElement.className = setAppTheme('light-theme');
		} else {
			themeCtx.dispatch({ type: 'DARK_THEME' });
			document.documentElement.className = setAppTheme('dark-theme');
		}
	};

	return (
		<div className="title">
			<h1>Todo</h1>
			{theme === 'dark-theme' ? (
				<img
					className="sun-icon"
					src={SunIcon}
					alt="Sun Icon"
					onClick={toggleThemeHandler}
				/>
			) : (
				<img
					className="moon-icon"
					src={MoonIcon}
					alt="Moon Icon"
					onClick={toggleThemeHandler}
				/>
			)}
		</div>
	);
};

export default Title;
