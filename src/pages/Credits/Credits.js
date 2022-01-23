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
          <h1>The resources we use to create this project:</h1>
          {/* <article className={styles['list-wrapper']}>
            <ul className={styles.list}>
              <li>
                <a href='#' className={styles.list__link}>
                  Kaggle.com
                </a>
              </li>
            </ul>
          </article> */}
          <article className={styles.card}>
            <img
              // src='https://dummyimage.com/600x400/000/fff&text=logo'
              src='data:image/png;base64,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'
              alt=''
              className={styles.card__image}
            />
            {/* <h2 className={styles.card__title}>Name</h2> */}
          </article>
        </div>
      </section>
    </main>
  );
};

export default Credits;
