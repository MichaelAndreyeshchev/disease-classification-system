import React from 'react';
import styles from './Contact.module.css';
import { Formik, Form, Field } from 'formik';
import groupImage from '../../Images/group-image.png';
import swal from 'sweetalert';

const Contact = () => {
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const success = () => {
    swal({
      title: 'Thank you',
      text: 'Message Sent Successfully!',
      icon: 'success',
      button: 'OK!',
    });
  };

  const handleFormValidation = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Please fill in your name.';
    }

    if (!values.email || values.email === '') {
      errors.email = 'Please fill in your email.';
    } else if (!validateEmail(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.subject) {
      errors.subject = 'Please fill the subject field.';
    }

    if (!values.message || values.message === '') {
      errors.message = 'Please fill the message field.';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      success();
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  return (
    <main className={styles.main}>
      <section className={`${styles.container} ${styles.section__message}`}>
        <h2 className={styles.container__heading}>Let's Connect!</h2>
        <p className={styles.container_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          quis quis mauris ut. Metus neque, elementum risus, id varius vitae
          mauris commodo egestas.
        </p>
        <img
          src={groupImage}
          className={styles.container__image}
          alt='group image'
        />
      </section>

      <section className={`${styles.container} ${styles.section__form}`}>
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validate={(values) => handleFormValidation(values)}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className='row g-3'>
              <article className='row'>
                <div className='col-md-6'>
                  <label
                    for='name'
                    className={`form-label ${styles.form__label}`}
                  >
                    Full Name
                  </label>
                  <Field
                    as='input'
                    className={`form-control ${styles.form__input}`}
                    name='name'
                    placeholder='John Doe'
                  />
                  <span className={styles.errors}>
                    {errors.name && touched.name && errors.name}
                  </span>
                </div>
                <div className='col-md-6'>
                  <label
                    for='email'
                    className={`form-label ${styles.form__label}`}
                  >
                    Email
                  </label>
                  <Field
                    as='input'
                    className={`form-control ${styles.form__input}`}
                    name='email'
                    placeholder='john_doe@domain.com'
                  />
                  <span className={styles.errors}>
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
              </article>
              <div className='col-12'>
                <label
                  for='subject'
                  className={`form-label ${styles.form__label}`}
                >
                  Subject of the matter
                </label>
                <Field
                  as='input'
                  className={`form-control ${styles.form__input}`}
                  name='subject'
                  placeholder='Collaboration Offer'
                />
                <span className={styles.errors}>
                  {errors.subject && touched.subject && errors.subject}
                </span>
              </div>
              <div className='col-12'>
                <label
                  for='message'
                  className={`form-label ${styles.form__label}`}
                >
                  Message
                </label>
                <Field
                  as='textarea'
                  className={`form-control ${styles.form__textarea}`}
                  name='message'
                  placeholder='I would like to ask you...'
                />
                <span className={styles.errors}>
                  {errors.message && touched.message && errors.message}
                </span>
              </div>
              <div className='col-12'>
                <button
                  type='submit'
                  className={`btn ${styles.form__button}`}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default Contact;
