import React, { useState } from 'react';
import styles from './Contact.module.css';
// import style from './Contact.module.css';
import groupImage from '../../Images/group-image.png';
import swal from 'sweetalert';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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

  const emptyInput = (field) => {
    swal({
      title: 'Oops...!',
      text: `Please enter your ${field}!`,
      icon: 'error',
      button: 'OK!',
    });
  };

  const invalidEmail = () => {
    swal({
      title: 'Oops...!',
      text: 'Please enter a valid email address',
      icon: 'error',
      button: 'OK!',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      emptyInput('name');
    } else if (email.length < 1) {
      emptyInput('email');
    } else if (!validateEmail(email)) {
      invalidEmail();
    } else if (subject.length < 1) {
      emptyInput('subject');
    } else if (message.length < 1) {
      emptyInput('message');
    } else {
      success();
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    // <div className={style.container}>
    //   <div className={style.form}>
    //     <div className={style.contactInfo}>
    //       <h3 className={style.title}>Let's connect</h3>
    //       <p className={style.text}>
    //         We would love to know what you think about this website as it will
    //         help us improve our services and website. Send us a message and we
    //         will respond to it as soon as possible.
    //       </p>

    //       <div className={style.info}>
    //         <div className={style.information}>
    //           <h2>Email :</h2>
    //           <p>Tech for good's email</p>
    //         </div>
    //         <div className={style.information}>
    //           <h2>Fax :</h2>
    //           <p>123-456-789</p>
    //         </div>
    //       </div>

    //       <div className={style.socialMedia}>
    //         <p>Follow us on</p>
    //         <div className={style.socialIcons}>
    //           <a href='#'>
    //             <i className='fab fa-facebook-f'></i>
    //           </a>
    //           <a href='#'>
    //             <i className='fab fa-twitter'></i>
    //           </a>
    //           <a href='#'>
    //             <i className='fab fa-instagram'></i>
    //           </a>
    //           <a href='#'>
    //             <i className='fab fa-linkedin-in'></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className={style.contactForm}>
    //       <form action='index.html' autoComplete='off'>
    //         <h3 className={style.title}>Contact us</h3>
    //         <div className={style.inputContainer}>
    //           <input
    //             type='text'
    //             className={style.input}
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             id='name'
    //             placeholder='Enter your name.'
    //             autoComplete='off'
    //           />
    //         </div>
    //         <div className={style.inputContainer}>
    //           <input
    //             type='email'
    //             className={style.input}
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             id='email'
    //             placeholder='Enter your email address.'
    //             autoComplete='off'
    //           />
    //         </div>
    //         <div className={style.inputContainer}>
    //           <input
    //             type='text'
    //             className={style.input}
    //             value={subject}
    //             onChange={(e) => setSubject(e.target.value)}
    //             id='subject'
    //             placeholder='Enter the subject.'
    //             autoComplete='off'
    //           />
    //         </div>
    //         <div className={(style.inputContainer, style.textarea)}>
    //           <textarea
    //             className={style.input}
    //             value={message}
    //             onChange={(e) => setMessage(e.target.value)}
    //             id='message'
    //             placeholder='Enter your message here.'
    //             data-gramm_editor='false'
    //           ></textarea>
    //         </div>
    //         <input
    //           type='submit'
    //           value='Send'
    //           className={style.btn}
    //           onClick={handleSubmit}
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <main className={styles.main}>
      <section className={styles.container + ' ' + styles.section__message}>
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

      <section className={styles.container + ' ' + styles.section__form}>
        <form className='row g-3'>
          <div className='col-md-6'>
            <label
              for='inputEmail4'
              className={`form-label ${styles.form__label}`}
            >
              Full Name
            </label>
            <input
              type='text'
              className={`form-control ${styles.form__input}`}
              id='inputEmail4'
              placeholder='John Doe'
            />
          </div>
          <div className='col-md-6'>
            <label
              for='inputPassword4'
              className={`form-label ${styles.form__label}`}
            >
              Email
            </label>
            <input
              type='email'
              className={`form-control ${styles.form__input}`}
              id='inputPassword4'
              placeholder='john_doe@domain.com'
            />
          </div>
          <div className='col-12'>
            <label
              for='inputAddress'
              className={`form-label ${styles.form__label}`}
            >
              Subject of the matter
            </label>
            <input
              type='text'
              className={`form-control ${styles.form__input}`}
              id='inputAddress'
              placeholder='Collaboration Offer'
            />
          </div>
          <div className='col-12'>
            <label
              for='inputAddress2'
              className={`form-label ${styles.form__label}`}
            >
              Message
            </label>
            <textarea
              className={`form-control ${styles.form__textarea}`}
              id='exampleFormControlTextarea1'
            ></textarea>
          </div>
          <div className='col-12'>
            <button type='submit' className={`btn ${styles.form__button}`}>
              Submit
            </button>
          </div>

          {/* <article>
            <div>
              <label htmlFor='fullName'>Full Name</label>
              <input type='text' name='fullName' placeholder='John Doe' />
            </div>
            <div>
              <label htmlFor='email'>Full Name</label>
              <input
                type='email'
                name='email'
                placeholder='john_doe@domain.com'
              />
            </div>
          </article>
          <div>
            <label htmlFor='subject'>Subject of the matter</label>
            <input
              type='text'
              name='subject'
              placeholder='Collaboration Offer'
            />
          </div>
          <div>
            <label htmlFor='message'>Subject of the matter</label>
            <textarea name='message' cols='30' rows='10'></textarea>
          </div> */}
        </form>
      </section>
    </main>
  );
};

export default Contact;
