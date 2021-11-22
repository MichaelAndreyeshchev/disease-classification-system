import React from 'react';
import Button from '../../components/Button/Button';
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
        <Button text='Image Based' iconPosition='left' size='big' />
        <Button text='Text Based' size='big' />
      </section>
    </main>
  );
}

export default home;
