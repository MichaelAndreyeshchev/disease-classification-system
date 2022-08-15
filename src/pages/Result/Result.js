import React, { useState, useEffect } from 'react';
import LinkCustom from '../../components/Link/Link';
import * as ROUTES from '../../Constants/Routes';

import styles from './Result.module.css';
import { BsFillArrowDownCircleFill, BsDownload } from 'react-icons/bs';
import Modal from '../../components/Modal/Modal';
import background from '../../Images/Vector 10.png';
import healthCheck from '../../Images/Layer 2.png';
import { AiFillQuestionCircle } from 'react-icons/ai';
import ProgressBar from '@ramonak/react-progress-bar';

function Result() {
  const [modalClicked, setModalClicked] = useState(false);
  const [NumberOfAddition, setNumberOfAddition] = useState(3);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [numberOfData, setNumberOfData] = useState(3);

  let dummyData = [
    {
      name: 'Atherosclerosis',
      percentage: '50',
      tag: 'Circulatory',
    },
    {
      name: 'Lymphadenopathy',
      percentage: '48',
      tag: 'Lymphatic',
    },
    {
      name: 'Atopic Dermatitis',
      percentage: '49',
      tag: 'Integumentary',
    },
    {
      name: 'Leukemia...',
      percentage: '47',
      tag: 'Circulatory',
    },
    {
      name: 'Leukemia',
      percentage: '46',
      tag: 'Lymphatic',
    },
    {
      name: 'Leukemia',
      percentage: '45',
      tag: 'Respiratory',
    },
    {
      name: 'Leukemia...',
      percentage: '44',
      tag: 'Circulatory',
    },
    {
      name: 'Leukemia',
      percentage: '43',
      tag: 'Lymphatic',
    },
    {
      name: 'Leukemia',
      percentage: '41',
      tag: 'Respiratory',
    },
    {
      name: 'Leukemia...',
      percentage: '42',
      tag: 'Circulatory',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Lymphatic',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Respiratory',
    },
    {
      name: 'Leukemia...',
      percentage: '50',
      tag: 'Circulatory',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Lymphatic',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Respiratory',
    },
    {
      name: 'Leukemia...',
      percentage: '50',
      tag: 'Circulatory',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Lymphatic',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Respiratory',
    },
    {
      name: 'Leukemia...',
      percentage: '50',
      tag: 'Circulatory',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Lymphatic',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Respiratory',
    },
    {
      name: 'Leukemia',
      percentage: '50',
      tag: 'Respiratory',
    },
  ];

  useEffect(() => {
    if (modalClicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalClicked]);

  return (
    <main className={styles.main}>
      <article className={styles.container + ' ' + styles['container--left']}>
        <h2 className={styles['container__heading--result']}>you might have</h2>
        <h1 className={styles.container__result}>Tubercolosis!</h1>
        <h3
          className={
            styles.container__subheading + ' ' + styles['subheading--small']
          }
        >
          <span className={styles.container__percentages}>92%</span> matched
          your symptoms. <span className={styles.link}>Read more</span>
        </h3>
      </article>

      <article
        className={styles.container + ' ' + styles['container--background']}
      >
        <img className={styles.container__image} src={healthCheck} alt='' />
        <img className={styles.container__background} src={background} alt='' />
        <div className={styles.wrapper}>
          <h2 className={styles.container__heading}>What is Tuberculosis?</h2>
          <h3
            className={
              styles.container__subheading + ' ' + styles['subheading--yellow']
            }
          >
            Overview
          </h3>
          <p className={styles.container__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            accumsan at tortor at gravida. Nulla at metus massa. Duis vestibulum
            interdum sagittis. Ut at feugiat lorem. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
            rutrum nec lacus sed malesuada. Nunc imperdiet accumsan ipsum quis
            egestas. Maecenas malesuada luctus libero, eget porta lorem tempus
            id. Praesent vulputate odio quis mauris euismod volutpat. Nunc
            feugiat justo eu magna dictum tincidunt. Nam sollicitudin turpis a
            nulla tempor viverra. Integer vehicula ante vulputate, sollicitudin
            risus et, consequat enim. Praesent a ipsum libero. Integer iaculis
            nibh cursus, rhoncus tortor eu, tempus metus. Nam libero justo,
            commodo porta placerat vitae, cursus eget libero. Maecenas ultricies
            mattis justo in euismod. Vivamus eget libero tempus sem scelerisque
            pellentesque ac vitae mauris. Duis sed est ipsum. Cras vulputate
            porttitor ante et varius. Nunc at nunc ac metus commodo elementum.
            Curabitur fermentum ut lectus.
          </p>
          <h3
            className={
              styles.container__subheading + ' ' + styles['subheading--yellow']
            }
          >
            Your next steps
          </h3>
          <p className={styles.container__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            accumsan at tortor at gravida. Nulla at metus massa. Duis vestibulum
            interdum sagittis. Ut at feugiat lorem. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
            rutrum nec lacus sed malesuada. Nunc imperdiet accumsan ipsum quis
            egestas. Maecenas malesuada luctus libero, eget porta lorem tempus
            id. Praesent vulputate odio quis mauris euismod volutpat. Nunc
            feugiat justo eu magna dictum tincidunt.
          </p>
        </div>
      </article>

      <article className={styles.container + ' ' + styles['container--result']}>
        <article className={styles['container__header']}>
          <div>
            <h2 className={styles.container__heading}>Other Top Results</h2>
            <p
              className={
                styles.container__description + ' ' + styles['no--margin']
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              enim amet, maecenas ac. Ipsum mauris tortor nulla ultrices quisque
              dictum. At odio consequat tellus mauris ullamcorper sed. Nibh non
              interdum cursus ornare pretium ut.
            </p>
          </div>

          <div>
            <label for='numOfData'>Number Of Data:</label>

            <select
              name='numOfData'
              id='numOfData'
              onChange={(e) => {
                setNumberOfAddition(e.target.value);
              }}
            >
              <option value='3'>3</option>
              <option value='6'>6</option>
              <option value='9'>9</option>
              <option value='12'>12</option>
              <option value='15'>15</option>
              <option value='15'>All</option>
            </select>
          </div>

          <div>
            <button
              className={styles.header__button}
              onClick={() => setModalClicked(true)}
            >
              <BsDownload className={styles['button__icon']} />
              Download Results
            </button>
          </div>
        </article>

        <div className={styles['container-other-result']}>
          {/* {dummyData.slice(0, numberOfData).map((data, i) => (
            <article
              className={styles['container-other-result__wrapper']}
              onClick={() => {
                setModalClicked(true);
                setCurrentDataIndex(i);
              }}
              key={i}
            >
              <div className={styles['container-other-result__wrapper-left']}>
                <h3>{data.percentage}%</h3>
              </div>
              <div className={styles['container-other-result__wrapper-right']}>
                <h4>{data.tag}</h4>
                <h3>{data.name}</h3>
              </div>
            </article>
          ))} */}

          <article className={styles.card}>
            <div className={styles.card__wrapper}>
              <h2 className={styles.card__heading}>83%</h2>
            </div>
            <div className={styles.card__wrapper}>
              <h3 className={styles.card__subheading}>Leukimia</h3>
              <AiFillQuestionCircle />

              {/* 
                https://www.npmjs.com/package/@ramonak/react-progress-bar#examples 
              */}
              <ProgressBar completed={83} customLabel=' ' />
            </div>
          </article>
        </div>
        <div
          className={styles.container__footer}
          onClick={() => {
            if (numberOfData > dummyData.length) {
              console.log('Full');
            } else {
              setNumberOfData(Number(numberOfData) + Number(NumberOfAddition));
            }
            console.log('numberOfData', numberOfData);
          }}
        >
          <h3 className={styles['container-footer__title']}>
            See more results{' '}
          </h3>{' '}
          <BsFillArrowDownCircleFill
            className={styles['container-footer__icon']}
          />
        </div>
      </article>

      <article
        className={styles.container + ' ' + styles['container--collect-data']}
      >
        <div>
          <h2
            className={
              styles.container__heading + ' ' + styles['heading--collect-data']
            }
          >
            Can we collect your data for improving our algorithm to provide you
            with the best service?
          </h2>
          <div className={styles['wrapper-collect-data']}>
            <input
              type='radio'
              id='yes'
              name='collect_data'
              value='Yes'
              className={styles['wrapper__radio-button']}
            />
            <label htmlFor='yes' className={styles.wrapper__label}>
              Yes
            </label>
            <input
              type='radio'
              id='no'
              name='collect_data'
              value='No'
              className={styles['wrapper__radio-button']}
              defaultChecked
            />
            <label htmlFor='no' className={styles.wrapper__label}>
              No
            </label>
          </div>
        </div>

        <LinkCustom
          to={ROUTES.IMAGE_INDIVIDUAL}
          text='Detect Again'
          iconPosition='right'
          size='big'
        />
      </article>

      {modalClicked && (
        <Modal
          modalOpen={modalClicked}
          setModalOpen={setModalClicked}
          title='All Result'
          data={dummyData[currentDataIndex]}
          // variant='download'
        />
      )}
    </main>
  );
}

export default Result;
