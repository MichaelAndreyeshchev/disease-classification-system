import React from 'react';
import Button from '../../components/Button/Button';
import LinkCustom from '../../components/Link/Link';
import * as ROUTES from '../../Constants/Routes';
import styles from './Home.module.css';
import home_image from '../../Images/home_image.png';

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container + ' ' + styles.section__home}>
        <artivle className={styles.wrapper}>
          <div>
            <h1 className={styles.wrapper__title}>
              Don’t worry, We always got you covered!
            </h1>
          </div>
          <div>
            <p>
              Welcome to{' '}
              <span className={styles['description--highlight']}>
                Disease Tracker
              </span>
              , this is a sophisticated and intuitive tool that you can always
              rely on whenever you’re in a pinch!
            </p>
            <p>
              To start off, please write down the symptoms that you have been
              experienced below.
            </p>
          </div>
        </artivle>
        <div className={styles['image_wrapper']}>
          <img className={styles.image} src={home_image} alt='' />
        </div>
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
