import React from 'react';
import styles from './CardList.module.css';

function CardList({ resource, title, description }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {resource} - {title}
      </h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default CardList;
