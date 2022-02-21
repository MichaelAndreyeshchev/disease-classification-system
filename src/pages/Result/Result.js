import React from 'react';
import LinkCustom from '../../components/Link/Link';
import * as ROUTES from '../../Constants/Routes';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import styles from './Result.module.css';

function Result() {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <h2 className={styles['container__heading--result']}>You might have</h2>
        <h1 className={styles.container__result}>
          Tubercolosis
          <spans className={styles.container__percentages}>70%</spans>
        </h1>
      </article>

      <article className={styles.container}>
        <h2 className={styles.container__heading}>Description</h2>
        <p className={styles.container__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          accumsan at tortor at gravida. Nulla at metus massa. Duis vestibulum
          interdum sagittis. Ut at feugiat lorem. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
          rutrum nec lacus sed malesuada. Nunc imperdiet accumsan ipsum quis
          egestas. Maecenas malesuada luctus libero, eget porta lorem tempus id.
          Praesent vulputate odio quis mauris euismod volutpat. Nunc feugiat
          justo eu magna dictum tincidunt. Nam sollicitudin turpis a nulla
          tempor viverra. Integer vehicula ante vulputate, sollicitudin risus
          et, consequat enim. Praesent a ipsum libero. Integer iaculis nibh
          cursus, rhoncus tortor eu, tempus metus. Nam libero justo, commodo
          porta placerat vitae, cursus eget libero. Maecenas ultricies mattis
          justo in euismod. Vivamus eget libero tempus sem scelerisque
          pellentesque ac vitae mauris. Duis sed est ipsum. Cras vulputate
          porttitor ante et varius. Nunc at nunc ac metus commodo elementum.
          Curabitur fermentum ut lectus.
        </p>
      </article>

      <article className={styles.container + ' ' + styles['container--result']}>
        <h2 className={styles.container__heading}>Other Results</h2>
        <div className={styles['container-other-result']}>
          <article className={styles['container-other-result__wrapper']}>
            <div className={styles['container-other-result__wrapper-left']}>
              <h3>50%</h3>
            </div>
            <div className={styles['container-other-result__wrapper-right']}>
              <h3>Leukimia</h3>
            </div>
          </article>

          <article className={styles['container-other-result__wrapper']}>
            <div className={styles['container-other-result__wrapper-left']}>
              <h3>50%</h3>
            </div>
            <div className={styles['container-other-result__wrapper-right']}>
              <h3>Leukimia</h3>
            </div>
          </article>

          <article className={styles['container-other-result__wrapper']}>
            <div className={styles['container-other-result__wrapper-left']}>
              <h3>50%</h3>
            </div>
            <div className={styles['container-other-result__wrapper-right']}>
              <h3>Leukimia hello asd asd asd </h3>
            </div>
          </article>

          <article className={styles['container-other-result__wrapper']}>
            <div className={styles['container-other-result__wrapper-left']}>
              <h3>50%</h3>
            </div>
            <div className={styles['container-other-result__wrapper-right']}>
              <h3>Leukimia</h3>
            </div>
          </article>

          <article className={styles['container-other-result__wrapper']}>
            <div className={styles['container-other-result__wrapper-left']}>
              <h3>50%</h3>
            </div>
            <div className={styles['container-other-result__wrapper-right']}>
              <h3>Leukimia</h3>
            </div>
          </article>

          <article className={styles['container-other-result__wrapper']}>
            <div className={styles['container-other-result__wrapper-left']}>
              <h3>50%</h3>
            </div>
            <div className={styles['container-other-result__wrapper-right']}>
              <h3>Leukimia</h3>
            </div>
          </article>
        </div>
        <div className={styles.container__footer}>
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
            <label for='yes' className={styles.wrapper__label}>
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
            <label for='no' className={styles.wrapper__label}>
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
    </main>
  );
}

export default Result;
