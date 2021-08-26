import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { Animated } from 'react-animated-css';
import { useTranslation } from 'react-i18next';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import About from './../../components/About/About';
import Resume from './../../components/Resume/Resume';
import Testimonials from './../../components/Testimonials/Testimonials';
import Articles from './../../components/Articles/Articles';
import Navbar from '../../components/Navbar/Navbar';
import HashLoader from 'react-spinners/HashLoader';

const override = css`
	display: block;
	margin: 0 auto;
	display: contents;
`;

function MainPage() {
	const [isLoading, setIsLoading] = useState(true);
	const { i18n } = useTranslation();

	useEffect(() => {
		changeLanguage(window.localStorage.getItem('locale'));

		if (isLoading) {
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const changeLanguage = (language) => {
		if (!language) {
			language = 'enUS';
			window.localStorage.setItem('locale', 'enUS');
		}

		document.title =
			language === 'ptBR' ? 'Paulo Lima | Portfólio' : 'Paulo Lima | Portfolio';

		i18n.changeLanguage(language);
	};

	return (
		<div className="App">
			{isLoading ? (
				<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
					<HashLoader
						css={override}
						loading={isLoading}
						size={150}
						color={'#74FBFE'}
					/>
				</Animated>
			) : (
				<div>
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={true}
					>
						<Navbar />
						<Header />
						<About />
						<Resume />
						<Testimonials />
						<Articles />
						<Footer />
					</Animated>
				</div>
			)}
		</div>
	);
}

export default MainPage;
