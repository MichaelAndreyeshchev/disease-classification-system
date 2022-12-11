import React from 'react';
import styles from './Card.module.css';
import avatar from '../../assets/Images/avatar.png';
import avatar2 from '../../assets/Images/michael_avatar.png';

const Card = ({ name, role, description, variant }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles['card__image']}
        src={variant == 'michael' ? avatar2 : avatar}
        alt=''
      />
      <div className={styles['card__container']}>
        <span className={styles['card__title']}>{name}</span>
        <span className={styles['card__subtitle']}>{role}</span>
        <span className={styles['card__description']}>{description}</span>
      </div>
    </div>
  );
};

export default Card;
