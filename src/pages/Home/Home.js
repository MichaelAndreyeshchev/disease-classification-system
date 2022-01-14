import React from 'react';
import Button from '../../components/Button/Button';
import LinkCustom from '../../components/Link/Link';
import * as ROUTES from '../../Constants/Routes';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container + ' ' + styles.section__home}>
        <div className={styles.wrapper}>
          <h1 className={styles.wrapper__title}>Welcome to Disease Detector</h1>
          <Button text="Let's Explore" />
        </div>
        <div className={styles.circle}></div>
      </section>

      <section className={styles.container + ' ' + styles.section__features}>
        <div
          className={styles.container__wrapper + ' ' + styles['wrapper--left']}
        >
          <LinkCustom
            to={ROUTES.IMAGE_INDIVIDUAL}
            text='Image Based'
            iconPosition='left'
            size='big'
          />
        </div>

        <div
          className={styles.container__wrapper + ' ' + styles['wrapper--right']}
        >
          <LinkCustom
            to={ROUTES.TEXT_DETECTION}
            text='Text Based'
            iconPosition='right'
            size='big'
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
