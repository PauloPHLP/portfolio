import React from 'react';
import { useTranslation } from 'react-i18next';
import html5 from './../../../assets/images/html5.png';
import css3 from './../../../assets/images/css3.png';
import javascript from './../../../assets/images/javascript.png';
import typescript from './../../../assets/images/typescript.png';
import vuejs from './../../../assets/images/vuejs.png';
import reactjs from './../../../assets/images/reactjs.png';
import cypress from './../../../assets/images/cypress.png';
import git from './../../../assets/images/git.png';
import './Technologies.css';

function Technologies() {
	const { t } = useTranslation();

	const calculateExperienceTime = (startYear) => {
		const yearsOfExperience = new Date().getFullYear() - startYear;

		return `${yearsOfExperience} ${
			yearsOfExperience === 1 ? t('year') : t('years')
		} ${t('experience')}`;
	};

	return (
		<div className="row skill">
			<div className="three columns header-col">
				<h1>
					<span>{t('resume_tech')}</span>
				</h1>
			</div>
			<div>
				<div className="nine columns main-col tech-imgs">
					<p className="lead center">{t('resume_techMessage')}</p>
				</div>
				<ul className="bgrid-quarters s-bgrid-thirds cf">
					<div className="columns feature-item">
						<img className="skill" alt="HTML 5." src={html5} />
						<h5 className="tech-name">HTML 5</h5>
						<b>{calculateExperienceTime(2017)}</b>
						<p>{t('resume_html5')}</p>
					</div>
					<div className="columns feature-item">
						<img className="skill" alt="CSS 3." src={css3} />
						<h5 className="tech-name">CSS 3</h5>
						<b>{calculateExperienceTime(2017)}</b>
						<p>{t('resume_css3')}</p>
					</div>
					<div className="columns feature-item">
						<img className="skill" alt="JavaScript." src={javascript} />
						<h5 className="tech-name">JavaScript</h5>
						<b>{calculateExperienceTime(2017)}</b>
						<p>{t('resume_javascript')}</p>
					</div>
					<div className="columns feature-item">
						<img
							className="skill"
							alt="TypeScript."
							src={typescript}
							style={{ height: '12rem', marginTop: '3rem' }}
						/>
						<h5 className="tech-name">TypeScript</h5>
						<b>{calculateExperienceTime(2018)}</b>
						<p>{t('resume_typescript')}</p>
					</div>
					<div className="columns feature-item">
						<img className="skill" alt="Vue.js" src={vuejs} />
						<h5 className="tech-name">Vue.js</h5>
						<b>{calculateExperienceTime(2020)}</b>
						<p>{t('resume_vuejs')}</p>
					</div>
					<div className="columns feature-item">
						<img className="skill" alt="React.js." src={reactjs} />
						<h5 className="tech-name">React.js</h5>
						<b>{calculateExperienceTime(2018)}</b>
						<p>{t('resume_reactjs')}</p>
					</div>
					<div className="columns feature-item">
						<img className="skill" alt="Cypress." src={cypress} />
						<h5 className="tech-name">Cypress</h5>
						<b>{calculateExperienceTime(2021)}</b>
						<p>{t('resume_cypress')}</p>
					</div>

					<div className="columns feature-item">
						<img className="skill" alt="Git." src={git} />
						<h5 className="tech-name">Git</h5>
						<b>{calculateExperienceTime(2017)}</b>
						<p>{t('resume_git')}</p>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default Technologies;
