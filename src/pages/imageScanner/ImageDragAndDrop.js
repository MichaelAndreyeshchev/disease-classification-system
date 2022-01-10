import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './drop-file-input.module.css';
import uploadImg from '../../assets/cloud-upload-regular-240.png';

const DropFileInput = (props) => {
  const inputRef = useRef(null);
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
    const newFile = e.target.files[0];
    console.log(newFile.name);
  };

  const handleClick = () => {
    setIsDisabled(false);
    setTimeout(() => {
      inputRef.current.click();
      setIsDisabled(true);
    }, 300);
  };

  return (
    <>
      <main
        className={styles.container + ' ' + (isDragged ? styles.dragover : ' ')}
      >
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
            <p>Drag & Drop your Images here</p>
            <p>or</p>
            <p>Click to browse your file</p>
          </div>
          <input
            ref={inputRef}
            type='file'
            value=''
            onChange={onFileDrop}
            disabled={isDisabled}
          />
        </div>
      </main>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
