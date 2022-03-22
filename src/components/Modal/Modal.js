import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './Modal.module.css';
import ModalButton from '../Button/ModalButton';

const Modal = (props) => {
  useEffect(() => {
    console.log(props.parent);
    console.log(props.cardPosition);
    if (props.cardPosition) {
      props.parent.current.to(props.cardPosition, 0);
    }
  }, []);

  return (
    <>
      <article
        className={
          styles.modal + ' ' + (!props.modalOpen && styles['modal--inactive'])
        }
      >
        <div className={styles.modal__content}>
          <div className={styles.modal__header}>
            <div>
              <h2 className={styles['modal-header__heading']}>{props.title}</h2>
            </div>
            <div
              className={styles.modal__links}
              onClick={() => props.setModalOpen(false)}
            >
              <FiX />
            </div>
          </div>
          <div className={styles.modal__body}>
            <div className={styles.wrapper}>
              <h1>This is modal body</h1>
              <ul className={styles.list}>
                <li>
                  <a href='#' className={styles.list__link}>
                    Kaggle.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.modal__footer}>
            <ModalButton
              text='close'
              onClick={() => props.setModalOpen(false)}
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default Modal;
