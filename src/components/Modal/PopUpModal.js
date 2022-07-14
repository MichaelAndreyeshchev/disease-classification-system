import React from 'react';
import styles from './PopUpModal.module.css';
import errorIcon from '../../Images/error_icon.png';

const PopUpModal = ({ text, isModalOpen, onClose }) => {
  return (
    <div
      className={
        styles.container + ' ' + (!isModalOpen && styles['container--closed'])
      }
    >
      <article
        className={
          styles.modal + ' ' + (!isModalOpen && styles['modal--closed'])
        }
      >
        <img className={styles.modal__image} src={errorIcon} alt='error icon' />
        <h2 className={styles.modal__text}>{text}</h2>
        <button
          className={styles.modal__button}
          onClick={() => {
            onClose();
            document.body.style.overflow = 'unset';
          }}
        >
          Okay
        </button>
      </article>
    </div>
  );
};

export default PopUpModal;
