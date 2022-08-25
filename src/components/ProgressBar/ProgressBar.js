import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ progress }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className={styles.progress}>
      <div className={styles['progress-done']} style={style}></div>
    </div>
  );
};

export default ProgressBar;
