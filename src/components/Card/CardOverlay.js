import React from 'react';
import styles from './CardOverlay.module.css';
import defaultImage from '../../Images/defaultFileImage.png';

const CardOverlay = ({ text, imageUrl, onClick }) => {
  return (
    <div className={styles.card}>
      <img
        src={imageUrl ? imageUrl : defaultImage}
        className={styles.card__image}
      />
      <div className={styles.card__overlay}>
        <div className={styles.overlay__text}>
          <h3 className={styles.card__text}>{text}</h3>
          <button href='#' className={styles.button} onClick={onClick}>
            Remove file
          </button>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default CardOverlay;
