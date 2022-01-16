import React from 'react';
import styles from './Credits.module.css';
import Image from '../../Images/Thanks.svg';

const Credits = () => {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.container__wrapper}>
          <img src={Image} alt='' className={styles.container__image} />
        </div>
        <div className={styles.container__wrapper}>
          <h1>Special Thanks to:</h1>
        </div>
      </section>
    </main>
  );
};

export default Credits;
