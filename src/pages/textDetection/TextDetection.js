import React, { useState, useRef } from 'react';
import styles from './TextDetection.module.css';
import { FiAlertOctagon } from 'react-icons/fi';

function TextDetection() {
  const [symptopms, setSymptopms] = useState('');
  const [error, setError] = useState('');
  let textArea = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = textArea.current.value.split(',');
    console.log('adfads', textArea.current.value.split(','));
    if (!textArea.current.value) {
      setError('Please list your symptoms');
    } else if (userInput.length < 5) {
      setError('Please list more than 5 symptoms');
    } else {
      console.log(userInput);
      setSymptopms('');
      setError('');
    }
  };

  return (
    <main className={styles.main}>
      <article className={styles.modal}>
        <label className={styles.modal__label}>
          What are the symptoms that you have currently?
        </label>
        {error && (
          <div className={styles['error-container']}>
            <FiAlertOctagon />
            <span className={styles['error-container__message']}>{error}</span>
          </div>
        )}
        <textarea
          name='symptoms'
          id='symptopms'
          ref={textArea}
          value={symptopms}
          onChange={(e) => setSymptopms(e.target.value)}
          rows='10'
          className={styles.modal__input}
        ></textarea>
        <input
          type='submit'
          className={styles.modal__button}
          onClick={handleSubmit}
        />
      </article>
    </main>
  );
}

export default TextDetection;
