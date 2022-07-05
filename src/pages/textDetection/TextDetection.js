import React, { useState, useRef } from 'react';
import styles from './TextDetection.module.css';
import { FiAlertOctagon } from 'react-icons/fi';
import textDetectionImage from '../../Images/health-sick1.png';

function TextDetection() {
  const [symptomps, setSymptomps] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [error, setError] = useState('');
  let textArea = useRef(null);

  const handleChange = (symptoms) => {
    setSymptomps(symptoms);
    const userInput = textArea.current.value
      .split(',')
      .map((val) => val.trim())
      .filter((val) => val.length > 0);
    console.log('adfads', userInput);
    console.log('helo');
    if (!textArea.current.value) {
      setError('Please list your symptoms');
      setIsButtonActive(false);
    } else if (userInput.length < 5) {
      setError('Please list more than 5 symptoms');
      setIsButtonActive(false);
    } else {
      console.log(userInput);
      setIsButtonActive(true);
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      setSymptomps('');
      setIsButtonActive(false);
    }
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
          {error && (
            <div className={styles['error-container']}>
              <FiAlertOctagon />
              <span className={styles['error-container__message']}>
                {error}
              </span>
            </div>
          )}
          <textarea
            name='symptoms'
            id='symptopms'
            placeholder='Shortness of breath, headache, severe cold'
            ref={textArea}
            value={symptomps}
            onChange={(e) => handleChange(e.target.value)}
            rows='13'
            className={styles.modal__input}
          ></textarea>
          <input
            type='submit'
            className={
              styles.modal__button +
              ' ' +
              (isButtonActive ? styles['button--active'] : '')
            }
            onClick={handleSubmit}
            value='Detect my disease'
          />
        </article>
      </article>
      <img className={styles.image} src={textDetectionImage} alt='' />
    </main>
  );
}

export default TextDetection;
