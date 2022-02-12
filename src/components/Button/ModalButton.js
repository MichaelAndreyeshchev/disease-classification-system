import React from 'react';
import styles from './ModalButton.module.css';

const ModalButton = ({ onClick, text, variant }) => {
  return (
    <button
      className={
        styles.button + ' ' + (variant === 'reject' && styles['button--reject'])
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ModalButton;
