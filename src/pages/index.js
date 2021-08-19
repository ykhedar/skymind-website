import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Cloud APIs</>,
    imageUrl: 'img/cloud_api.jpg',
    description: (
      <>
        Open-source API for automating your UAV workflows. Control major UAV types,
        and analyse application data from the comfort of your browser.
      </>
    ),
  },
  {
    title: <>Mission Control Station</>,
    imageUrl: 'img/mission_control.PNG',
    description: (
      <>
        Multiplatform mission planner for all your devices. Plan, Execute and Observe
        UAV missions from anywhere.
      </>
    ),
  },
  {
    title: <>Fleet Management</>,
    imageUrl: 'img/fleet_management.PNG',
    description: (
      <>
        Manage all aspects of your fleet and team. Take action right when needed.
      </>
    ),
  },
  {
    title: <>Weather Forecast</>,
    imageUrl: 'img/weather_forecast.PNG',
    description: (
      <>
        Check weather before flight or include automated flight checklist for safe
        flights always.
      </>
    ),
  },
  {
    title: <>Flight Analytics</>,
    imageUrl: 'img/log_analysis.PNG',
    description: (
      <>
        Analyse developemental flights or production flights with automatically generated
        flight plots. Also useful to draw long term insights from the fleet.
      </>
    ),
  },
  {
    title: <>Flight Training in Simulation</>,
    imageUrl: 'img/sitl.png',
    description: (
      <>
        Train your new team members in simulation before taking to real flight and save
        cost and time. Test new builds in simulation before deploying on the real device.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="SkyMind logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/skymind.png')}
            />
            We enable{' '}
            <span className={styles.heroProjectKeywords}>cloud-based</span>{' '}
            <span className={styles.heroProjectKeywords}>automated</span> drone operations.{' '}
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to="https://calendly.com/skymind/demo">
              Schedule Meeting
            </Link>
            <Link
              className={clsx('margin-left--md', styles.indexTryMeButton)}
              to="http://sky-mind.eu">
              Online Demo
            </Link>
          </div>
        </div>
      </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
