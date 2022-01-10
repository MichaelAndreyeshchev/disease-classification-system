import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import style from './drop-file-input.module.css';

import uploadImg from '../../assets/cloud-upload-regular-240.png';

const FolderDetection = (props) => {
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

    for (let i = 0; i < e.target.files.length; i++) {
      console.log(e.target.files[i].name);
    }
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
        className={style.container + ' ' + (isDragged ? style.dragover : ' ')}
      >
        <div
          className={style['drop-file-input']}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div
            className={
              style['drop-file-input__label'] +
              ' ' +
              (isDragged ? style['label-dragover'] : ' ')
            }
            onClick={handleClick}
          >
            <img src={uploadImg} alt='' />
            <p>Drag & Drop your folder here</p>
            <p>or</p>
            <p>Click to browse your folder</p>
          </div>
          <input
            ref={inputRef}
            directory=''
            webkitdirectory=''
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

FolderDetection.propTypes = {
  onFileChange: PropTypes.func,
};

export default FolderDetection;
