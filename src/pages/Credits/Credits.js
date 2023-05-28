import React from 'react';
import styles from './Credits.module.css';

import Card from '../../components/Card/Card';
import TableList from '../../components/TableList/TableList';
import { ERNEST, MICHAEL } from '../../Constants/ProfileType';

const Credits = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1
          className={`${styles.section__heading} ${styles['heading--center']} ${styles['heading--big']}`}
        >
          Behind the wonder!
        </h1>
        <p
          className={`${styles.section__description} ${styles['description--center']}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magni?
          Odio velit soluta error tempore!
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.section__heading}`}>Dataset Sources</h2>
        <p
          className={`${styles.section__description} ${styles['description--left']}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magni?
          Odio velit soluta error tempore!
        </p>
        <TableList />
      </section>

      <section className={`${styles.section} ${styles['section--team']}`}>
        <h2 className={styles.section__heading}>The Team</h2>
        <p className={styles.wrapper__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst ac
          pellentesque aliquet phasellus posuere commodo.
        </p>
        <article className={`${styles.wrapper}`}>
          <Card
            name='Michael Andrev'
            role='Data Scientist'
            description=''
            variant={MICHAEL}
          />
          <Card
            name='Joseph Haryanto'
            role='Software Engineer'
            description=''
          />
          <Card
            name='Ernest Salim'
            role='Software Engineer'
            description=''
            variant={ERNEST}
          />
        </article>
      </section>
    </main>
  );
};

export default Credits;
