import React, { useState, useRef } from 'react';
import styles from './TextDetection.module.css';
import textDetectionImage from '../../Images/health-sick1.png';

function TextDetection() {
  const [symptomps, setSymptomps] = useState('');
  const [error, setError] = useState('');
  let textArea = useRef(null);

    const userInput = textArea.current.value
      .split(',')
      .map((val) => val.trim())
      .filter((val) => val.length > 0);

    if (!textArea.current.value) {
      setError('Please list your symptoms!');
    } else if (userInput.length < 5) {
      setError('Please list more than 5 symptoms!');
    } else {
      console.log(userInput);
      setError('');
    }
  };

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
            ref={textArea}
            value={symptomps}
            onChange={(e) => handleChange(e.target.value)}
            rows='13'
            className={
              styles.modal__input + ' ' + (error && styles['input--error'])
            }
          ></textarea>
          <input
            type='submit'
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
