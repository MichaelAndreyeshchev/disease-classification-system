import React, { useState } from 'react';
import CardList from '../CardList/CardList';
import styles from './TableList.module.css';

let dummyData = [
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
  {
    resource: 'Kaggle',
    title: 'User Cohort',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis similique odit suscipit. Sunt, non.',
  },
];

function TableList() {
  const PAGINATION_INCREASE = 4;
  const INITIAL_PAGINATION = 6;
  const [index, setIndex] = useState(INITIAL_PAGINATION);

  const handleUpdateIndex = () => {
    if (index === dummyData.length) {
      setIndex(INITIAL_PAGINATION);
    } else if (index + PAGINATION_INCREASE >= dummyData.length) {
      setIndex(dummyData.length);
    } else {
      setIndex(index + PAGINATION_INCREASE);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        {dummyData.map((data, i) => {
          if (i < index) {
            return (
              <CardList
                resource={data.resource}
                title={data.title + i}
                description={data.description}
              />
            );
          }
        })}
      </div>
      <div className={styles.container__footer}>
        <button className={styles.button} onClick={() => handleUpdateIndex()}>
          {index !== dummyData.length
            ? 'See more datasets'
            : 'See less datasets'}
        </button>
      </div>
    </div>
  );
}

export default TableList;
