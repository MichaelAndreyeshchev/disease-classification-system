import React, { useState } from 'react';
import styles from './TextDetection.module.css';
import textDetectionImage from '../../Images/health-sick1.png';
import PopUpModal from '../../components/Modal/PopUpModal';

function TextDetection() {
  const [symptomps, setSymptomps] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    const userInput = symptomps
      .split(',')
      .map((val) => val.trim())
      .filter((val) => val.length > 0);

    if (!symptomps) {
      setError('Please list your symptoms!');
      onOpenModal();
    } else if (userInput.length < 5) {
      setError('Please list more than 5 symptoms!');
      onOpenModal();
    } else {
      console.log(userInput);
      setError('');
      setSymptomps('');
    }
  };

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    document.body.style.overflow = 'unset';
    setIsModalOpen(false);
  };

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <h2 className={styles.title}>
          Please list down all of the{' '}
          <span className={styles.title__highlight}>symptoms</span> that you are
          currently experiencing
        </h2>
        <article className={styles.modal}>
          <div className={styles.modal__wrapper}>
            <label className={styles.modal__label}>
              Write down your symptoms
            </label>
            <label
              className={styles.modal__label + ' ' + styles['label--black']}
            >
              separated by commas
            </label>
          </div>
          <textarea
            name='symptoms'
            id='symptopms'
            placeholder='Shortness of breath, headache, severe cold'
            value={symptomps}
            onChange={(e) => setSymptomps(e.target.value)}
            rows='13'
            className={
              styles.modal__input + ' ' + (error && styles['input--error'])
            }
          ></textarea>
          <input
            type='submit'
            className={styles.modal__button}
            onClick={handleSubmit}
            value='Detect my disease'
          />
        </article>
      </article>
      <img className={styles.image} src={textDetectionImage} alt='' />
      {error && (
        <PopUpModal
          text={error}
          isModalOpen={isModalOpen}
          onClose={onCloseModal}
        />
      )}
    </main>
  );
}

export default TextDetection;
