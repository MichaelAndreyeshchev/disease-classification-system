import React from 'react';
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
];

function TableList() {
  return (
    <div className={styles.container}>
      {dummyData.map((data) => (
        <CardList
          resource={data.resource}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
}

export default TableList;
