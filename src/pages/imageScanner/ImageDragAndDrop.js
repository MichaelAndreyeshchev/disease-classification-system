import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './drop-file-input.module.css';
import uploadImg from '../../Images/Icon.png';

const DropFileInput = (props) => {
  const inputRef = useRef(null);
  const [fileDatas, setFileDatas] = useState([]);
  const [isDragged, setIsDragged] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const onDragEnter = () => {
    console.log('Enter');
    setIsDragged(true);
    setIsDisabled(false);
  };

  const onDragLeave = () => {
    console.log('onLeave');
    setIsDragged(false);
  };

  const onDrop = () => {
    console.log('OnDrop');
    setIsDragged(false);
    setTimeout(() => {
      setIsDisabled(true);
    }, 300);
  };

  const onFileDrop = (e) => {
    setTimeout(() => {
      setIsDisabled(true);
    }, 300);
    console.log(e.target.files);
    console.log(typeof e.target.files);
    let files = [];
    for (let i = 0; i < e.target.files.length; i++) {
      console.log(e.target.files[i].name);
      files.push(e.target.files[i]);
    }
    console.log('---------------------');
    console.log(files);
    // const newFile = e.target.files;
    // console.log(newFile);
    // console.log(newFile.name);
  };

  const handleClick = () => {
    setIsDisabled(false);
    setTimeout(() => {
      inputRef.current.click();
      setIsDisabled(true);
    }, 300);
  };

  const handleSubmit = () => {};

  return (
    <main className={styles.main + ' ' + (isDragged ? styles.dragover : ' ')}>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>
          Please <span className={styles.title_highlight}>take pictures</span>{' '}
          of your current condition and upload them down below.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim
          amet, maecenas ac. Ipsum mauris tortor nulla ultrices quisque dictum.
          At odio consequat tellus mauris ullamcorper sed. Nibh non interdum
          cursus ornare pretium ut.
        </p>
      </article>
      <div
        className={styles['drop-file-input']}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div
          className={
            styles['drop-file-input__wrapper'] +
            ' ' +
            (isDragged ? styles['label-dragover'] : ' ')
          }
          onClick={handleClick}
        >
          <img src={uploadImg} alt='' className={styles.wrapper__image} />
          <h2 className={styles.title + ' ' + styles['title--small']}>
            Drag and drop a{' '}
            <span className={styles['highlight--blue']}>file</span> or a{' '}
            <span className={styles['highlight--blue']}>folder</span>. Or{' '}
            <span className={styles['highlight--pink']}>
              browse your device
            </span>
          </h2>
          <p
            className={styles.description + ' ' + styles['description--small']}
          >
            supports .jpg and .png for file upload
          </p>
        </div>
        <input
          ref={inputRef}
          type='file'
          value=''
          onChange={onFileDrop}
          disabled={isDisabled}
          className={styles.input}
          multiple
        />
        <button className={styles.modal__button} onClick={handleSubmit}>
          Detect my disease
        </button>
      </div>
    </main>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
