import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CardOverlay from '../../components/Card/CardOverlay';
import styles from './drop-file-input.module.css';
import uploadImg from '../../Images/Icon.png';

const DropFileInput = (props) => {
  let dummyData = [
    {
      id: 1,
      name: 'img-skinrash-10202-google-image.png',
      imageUrl:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    },
    {
      id: 2,
      name: 'img-skinrash-10202-google-image.png',
      imageUrl:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    },
    {
      id: 3,
      name: 'img-skinrash-10202-google-image.png',
      imageUrl:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    },
    {
      id: 4,
      name: 'img-skinrash-10202-google-image.png',
      imageUrl:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    },
    {
      id: 5,
      name: 'img-skinrash-10202-google-image.png',
      imageUrl:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    },
    {
      id: 6,
      name: 'img-skinrash-10202-google-image.png',
      imageUrl:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    },
    {
      id: 7,
      name: 'img-skinrash-10202-google-image.png',
      imageUrl:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    },
    {
      id: 8,
      name: 'img-skinrash-10202-google-image.png',
      imageUrl:
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
    },
  ];

  const imageInputRef = useRef(null);
  const folderInputRef = useRef(null);
  const [fileDatas, setFileDatas] = useState([]);
  const [isDragged, setIsDragged] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [dummyDatas, setDummyDatas] = useState([]);

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

  const onFileDrop = (e, isDirectory = false) => {
    setTimeout(() => {
      setIsDisabled(true);
    }, 300);

    console.log(e.target.files);
    console.log(typeof e.target.files);

    let files = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const imageUrl = !isDirectory
        ? URL.createObjectURL(e.target.files[i])
        : null;
      const temp = {
        id: i,
        name: e.target.files[i].name,
        imageUrl: imageUrl,
      };
      console.log(temp);
      console.log(e.target.files[i].name);
      files.push(temp);
      // files.push(e.target.files[i]);
    }

    console.log('---------------------');
    console.log(files);
    setDummyDatas(files);
    // const newFile = e.target.files;
    // console.log(newFile);
    // console.log(newFile.name);
  };

  const handleImageClick = () => {
    setIsDisabled(false);
    setTimeout(() => {
      imageInputRef.current.click();
      setIsDisabled(true);
    }, 300);
  };

  const handleFolderClick = () => {
    setIsDisabled(false);
    setTimeout(() => {
      folderInputRef.current.click();
      setIsDisabled(true);
    }, 300);
  };

  const handleDelete = (id) => {
    console.log('pressed');
    console.log(id);
    const duplicate = [...dummyDatas];
    const filteredData = duplicate.filter((data) => data.id !== id);
    setDummyDatas(filteredData);
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
        {dummyDatas.length === 0 ? (
          <article className={styles.container}>
            <div
              className={
                styles['drop-file-input__wrapper'] +
                ' ' +
                (isDragged ? styles['label-dragover'] : ' ')
              }
              onClick={handleImageClick}
            >
              <img src={uploadImg} alt='' className={styles.wrapper__image} />
              <h2 className={styles.title + ' ' + styles['title--small']}>
                Upload multiple{' '}
                <span className={styles['highlight--blue']}>files</span>
              </h2>
              <p
                className={
                  styles.description + ' ' + styles['description--small']
                }
              >
                supports .jpg and .png for file upload
              </p>
            </div>
            <input
              ref={imageInputRef}
              type='file'
              value=''
              onChange={onFileDrop}
              disabled={isDisabled}
              className={styles.input}
              accept='image/png, image/jpeg, image/jpg'
              multiple
            />
            <div
              className={
                styles['drop-file-input__wrapper'] +
                ' ' +
                (isDragged ? styles['label-dragover'] : ' ')
              }
              onClick={handleFolderClick}
            >
              <img src={uploadImg} alt='' className={styles.wrapper__image} />
              <h2 className={styles.title + ' ' + styles['title--small']}>
                Upload multiple{' '}
                <span className={styles['highlight--blue']}>folders</span>
              </h2>
              <p
                className={
                  styles.description + ' ' + styles['description--small']
                }
              >
                detects all the image files inside
              </p>
            </div>
            <input
              ref={folderInputRef}
              type='file'
              value=''
              onChange={(e) => onFileDrop(e, true)}
              disabled={isDisabled}
              className={styles.input}
              directory=''
              webkitdirectory=''
              mozdirectory=''
            />
          </article>
        ) : (
          <div
            className={styles.container + ' ' + styles['container--result']}
            // className={styles['container--result']}
          >
            {dummyDatas.map((data, i) => {
              return (
                <CardOverlay
                  key={i}
                  text={`${data.name}+${data.id}`}
                  imageUrl={data.imageUrl}
                  onClick={() => handleDelete(data.id)}
                />
              );
            })}
          </div>
        )}
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
