import React from 'react';
import styles from './Card.module.css';
import MichaelProfilePicture from '../../assets/Images/michael_avatar.png';
import ErnestProfilePicture from '../../assets/Images/ernest_profile.jpg';
import JosephProfilePicture from '../../assets/Images/joseph_avatar.png';
import { ERNEST, MICHAEL } from '../../Constants/ProfileType';

const Card = ({ name, role, description, variant }) => {
  const getProfilePicture = () => {
    switch (variant) {
      case ERNEST:
        return ErnestProfilePicture;
      case MICHAEL:
        return MichaelProfilePicture;
      default:
        return JosephProfilePicture;
    }
  };

  return (
    <div className={styles.card}>
      <img className={styles['card__image']} src={getProfilePicture()} alt='' />
      <div className={styles['card__container']}>
        <span className={styles['card__title']}>{name}</span>
        <span className={styles['card__subtitle']}>{role}</span>
        <span className={styles['card__description']}>{description}</span>
      </div>
    </div>
  );
};

export default Card;
