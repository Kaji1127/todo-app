import React, { useContext } from 'react';
import BgDark from '../../assets/bg-mobile-dark.jpg';
import BgDarkDesktop from '../../assets/bg-desktop-dark.jpg';
import BgLight from '../../assets/bg-mobile-light.jpg';
import BgLightDesktop from '../../assets/bg-desktop-light.jpg';
import './Background.scss';
import ThemeContext from '../../store/ThemeContext';

const Background = () => {
	const themeCtx = useContext(ThemeContext);
	const theme = themeCtx.state.theme;

	return (
		<div className="background">
			<picture>
				{theme === 'dark-theme' ? (
					<>
						<source media="(min-width: 48em)" srcSet={BgDarkDesktop} />
						<img className="background__bg" src={BgDark} alt="Background" />
					</>
				) : (
					<>
						<source media="(min-width: 48em)" srcSet={BgLightDesktop} />
						<img className="background__bg" src={BgLight} alt="Background" />
					</>
				)}
			</picture>
		</div>
	);
};

export default Background;
