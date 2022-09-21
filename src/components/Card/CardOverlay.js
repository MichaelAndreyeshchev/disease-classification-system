import React from 'react';
import styles from './CardOverlay.module.css';

const CardOverlay = () => {
  return (
    <div class={styles.card}>
      <img
        src='https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
        class={styles.card__image}
      />
      <div class={styles.card__overlay}>
        <div class={styles.overlay__text}>
          <h3>img-skinrash-10202-google-image.png</h3>
          <button href='#' class={styles.button}>
            Remove file
          </button>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default CardOverlay;
