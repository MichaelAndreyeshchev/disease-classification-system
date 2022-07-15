import React from 'react';
import styles from './Credits.module.css';

import TestiMonial from '../../components/TestiMonial/TestiMonial';
import Card from '../../components/Card/Card';

const Credits = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.section__title}>Our Resources</h1>
        <TestiMonial />
      </section>
      <section className={styles.section}>
        <h2 className={styles.section__title}>Meet the Team</h2>
        <article className={styles.wrapper}>
          <Card
            name='Michael Andrev'
            role='Data Scientist'
            description=''
            variant='michael'
          />
          <Card
            name='Joseph Haryanto'
            role='Frontend developer'
            description=''
          />
        </article>
      </section>
    </main>
  );
};

export default Credits;
