import React from 'react';
import styles from './Card.module.css';
import MichaelProfilePicture from '../../assets/Images/michael_avatar.png';
import ErnestProfilePicture from '../../assets/Images/ernest_profile.jpg';
import JosephProfilePicture from '../../assets/Images/joseph_avatar.png';
import { ERNEST, MICHAEL } from '../../Constants/ProfileType';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Card = ({ name, role, description, variant }) => {
  const ernestSocialLinks = [
    <a
      className={styles.links}
      href='https://github.com/Nesto17'
      target='_blank'
    >
      <BsGithub className={styles.icon} />
    </a>,
    <a
      className={styles.links}
      href='https://www.linkedin.com/in/ernestsalim/'
      target='_blank'
    >
      <BsLinkedin className={styles.icon} />
    </a>,
  ];

  const michaelSocialLinks = [
    <a
      className={styles.links}
      href='https://www.linkedin.com/in/michael-andrev-5863791b7/'
      target='_blank'
    >
      <BsLinkedin className={styles.icon} />
    </a>,
  ];

  const josephSocialLinks = [
    <a
      className={styles.links}
      href='https://github.com/Jos02378'
      target='_blank'
    >
      <BsGithub className={styles.icon} />
    </a>,
    <a
      className={styles.links}
      href='https://www.linkedin.com/in/haryantojoseph/'
      target='_blank'
    >
      <BsLinkedin className={styles.icon} />
    </a>,
  ];

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

  const getSocialLinks = () => {
    switch (variant) {
      case ERNEST:
        return ernestSocialLinks;
      case MICHAEL:
        return michaelSocialLinks;
      default:
        return josephSocialLinks;
    }
  };

  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={getProfilePicture()} alt='' />
      <div className={styles.card__container}>
        <span className={styles.card__title}>{name}</span>
        <span className={styles.card__subtitle}>{role}</span>
        <span className={styles.card__description}>{description}</span>
        <div className={styles.card__wrapper}>{getSocialLinks()}</div>
      </div>
    </div>
  );
};

export default Card;
