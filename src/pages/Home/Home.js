import React from 'react';
import Button from '../../components/Button/Button';
import LinkCustom from '../../components/Link/Link';
import * as ROUTES from '../../Constants/Routes';
import styles from './Home.module.css';
import home_image from '../../Images/home_image2.png';
import text_option from '../../Images/text_option.png';
import image_option from '../../Images/image_option.png';

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container + ' ' + styles.section__home}>
        <artivle className={styles.wrapper}>
          <div>
            <h1 className={styles.wrapper__title}>
              Don’t worry, We always got you{' '}
              <span className={styles['text-highlight']}>covered</span>!
            </h1>
          </div>
          <div>
            <p className={styles.wrapper__description}>
              Welcome to{' '}
              <span className={styles['text-highlight']}>Disease Tracker</span>,
              this is a sophisticated and intuitive tool that you can always
              rely on whenever you’re in a pinch!
            </p>
            <p className={styles.wrapper__description}>
              To start off, please write down the symptoms that you have been
              experienced below.
            </p>
          </div>
        </artivle>
        <div className={styles['image_wrapper']}>
          <img className={styles.image} src={home_image} alt='' />
        </div>
      </section>

      <section className={styles.container + ' ' + styles.section__features}>
        {/* <div></div> */}
        <h2 className={styles.wrapper__title + ' ' + styles['title--small']}>
          Tell us your preferred way to get your disease diagnosed
        </h2>
        <article className={styles.wrapper + ' ' + styles['wrapper--row']}>
          <div className={styles.option}>
            <img className={styles.option__image} src={text_option} alt='' />
            <h3 className={styles.option__title}>Write down symptoms</h3>
            <p className={styles.option__description}>
              Tell us every symptom that you are currently facing in the
              provided textbox.
            </p>
          </div>
          <div className={styles.option + ' ' + styles['option--right']}>
            <img className={styles.option__image} src={image_option} alt='' />
            <h3 className={styles.option__title}>Upload images of disease</h3>
            <p className={styles.option__description}>
              Upload every picture that is related to the disease you are
              currently hosting.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Home;
