import React from 'react';
import './Background.scss';
import mobileLightBackground from '../../assets/bg-mobile-light.jpg';
// import mobileDarkBackground from './assets/bg-mobile-dark.jpg';
import desktopLightBackground from '../../assets/bg-desktop-light.jpg';
// import desktopDarkBackground from './assets/bg-desktop-dark.jpg';

const Background = () => {
	return (
		<>
			<div className="background">
				<div className="background__content">
					<picture className="background__image">
						<source media="(min-width: 36em)" srcSet={desktopLightBackground} />
						<img src={mobileLightBackground} alt="background" />
					</picture>
				</div>
			</div>
		</>
	);
};

export default Background;
