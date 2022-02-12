import React from 'react';
import styles from './Card.module.css';
import avatar from '../../Images/avatar.png';

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles['card__image']} src={avatar} alt='' />
      <div className={styles['card__container']}>
        <span className={styles['card__title']}>Joseph</span>
        <span className={styles['card__subtitle']}>Role</span>
        <span className={styles['card__description']}>Description</span>
      </div>
    </div>
  );
};

export default Card;
