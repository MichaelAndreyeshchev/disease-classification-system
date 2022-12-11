import React, { Component } from 'react';
import styles from './TextDetection.module.css';
import textDetectionImage from '../../assets/Images/health-sick1.png';
import PopUpModal from '../../components/Modal/PopUpModal';

class TextDetection extends Component {
  state = {
    userSymptomps: '',
    errorText: '',
    isModalOpen: false,
  };

  handleSubmit = () => {
    const userInput = this.state.userSymptomps
      .split(',')
      .map((val) => val.trim())
      .filter((val) => val.length > 0);

    if (!this.state.userSymptomps) {
      this.handleChange('Please list your symptoms!', 'errorText');
      this.onOpenModal();
    } else if (userInput.length < 5) {
      this.handleChange('Please list more than 5 symptoms!', 'errorText');
      this.onOpenModal();
    } else {
      console.log(userInput);
      this.handleChange('', 'errorText');
      this.handleChange('');
    }
  };

  handleChange = (newValue, key = 'userSymptomps') => {
    this.setState((prevState) => {
      return { ...prevState, [key]: newValue };
    });
  };

  onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    this.handleChange(true, 'isModalOpen');
  };

  onCloseModal = () => {
    document.body.style.overflow = 'unset';
    this.handleChange(false, 'isModalOpen');
  };

  render() {
    return (
      <main className={styles.main}>
        <article className={styles.container}>
          <h2 className={styles.title}>
            Please list down all of the{' '}
            <span className={styles.title_highlight}>symptoms</span> that you
            are currently experiencing
          </h2>
          <article className={styles.modal}>
            <div className={styles.modal__wrapper}>
              <label className={styles.modal__label}>
                Write down your symptoms
              </label>
              <label
                className={`${styles.modal__label} ${styles['label--black']}`}
              >
                separated by commas
              </label>
            </div>
            <textarea
              name='symptoms'
              id='symptopms'
              placeholder='Shortness of breath, headache, severe cold'
              value={this.state.userSymptomps}
              onChange={(e) => this.handleChange(e.target.value)}
              rows='13'
              className={`${styles.modal__input} ${
                this.state.errorText.length > 0 && styles['input--error']
              }`}
            ></textarea>
            <input
              type='submit'
              className={styles.modal__button}
              onClick={this.handleSubmit}
              value='Detect my disease'
            />
          </article>
        </article>
        <img className={styles.image} src={textDetectionImage} alt='' />
        {this.state.errorText.length > 0 && (
          <PopUpModal
            text={this.state.errorText}
            isModalOpen={this.state.isModalOpen}
            onClose={this.onCloseModal}
          />
        )}
      </main>
    );
  }
}

export default TextDetection;
