import React from 'react';
import styles from './Credits.module.css';

import TestiMonials from '../../components/TestiMonials/TestiMonials';
import Card from '../../components/Card/Card';

const Credits = () => {
  return (
    <main className={styles.main}>
      <section>
        <TestiMonials />
      </section>
      <section>
        <h2>Meet the team</h2>
        <article>
          <Card />
          <Card />
        </article>
      </section>
    </main>
  );
};

export default Credits;
