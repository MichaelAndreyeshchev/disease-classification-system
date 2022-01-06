import React from 'react';
import Button from '../../components/Button/Button';
import LinkCustom from '../../components/Link/Link';
import * as ROUTES from '../../Constants/Routes';
import style from './Home.module.css';

function home() {
  return (
    <main className={style.main}>
      <section className={style.container + ' ' + style.section__home}>
        <div className={style.wrapper}>
          <h1 className={style.wrapper__title}>Welcome to Disease Detector</h1>
          <Button text="Let's Explore" />
        </div>
        <div className={style.circle}></div>
      </section>

      <section className={style.container + ' ' + style.section__features}>
        <LinkCustom
          to={ROUTES.IMAGE_INDIVIDUAL}
          text='Image Based'
          iconPosition='left'
          size='big'
        />

        <LinkCustom
          to={ROUTES.TEXT_DETECTION}
          text='Text Based'
          iconPosition='right'
          size='big'
        />
      </section>
    </main>
  );
}

export default home;
