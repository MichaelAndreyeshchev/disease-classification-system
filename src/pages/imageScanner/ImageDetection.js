import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import style from './ImageDetection.module.css';

function ImageDetection() {
  const navigate = useNavigate();
  //   const [isClicked, setIsClicked] = useState(false);

  const fileInput = useRef(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleChange = () => {
    console.log('Hello');
    console.log(fileInput.current.files[0].name);
    navigate('/loading');
  };

  return (
    <main className={style.container}>
      <Button text='Upload Image' size='big' onClick={handleClick} />
      <input
        type='file'
        accept='image/*'
        ref={fileInput}
        className={style['container__input--image']}
        onChange={handleChange}
      />
    </main>
  );
}

export default ImageDetection;
