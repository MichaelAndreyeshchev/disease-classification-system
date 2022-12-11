import React, { useState, useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import ModalButton from '../Button/ModalButton';
import thanksImage from '../../assets/Images/Intersect.png';

import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';

/*
- csv (Done)
- txt (DONE)
- xlsx (Done)

 */

const Modal = (props) => {
  const data = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
    { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
    { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
  ];

  const headers = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Email', key: 'email' },
  ];

  const csvReport = {
    filename: 'MyReport.csv',
    headers: headers,
    data: data,
  };

  const [wikiData, setWikiData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [fileFormat, setFileFormat] = useState('csv');
  const csvLink = useRef(null);

  const LearnMoreUrl = `https://www.verywellhealth.com/organ-system-1298691#toc-${props.data.tag.toLowerCase()}-system`;

  useEffect(() => {
    setIsLoading(true);
    console.log(props.parent);
    console.log(props.cardPosition);
    if (props.cardPosition) {
      props.parent.current.to(props.cardPosition, 0);
    }

    getData(props.data.name.toLowerCase());
  }, []);

  const handleDownload = () => {
    if (fileFormat === 'csv') {
      csvLink.current.link.click();
    } else if (fileFormat === 'txt') {
      downloadTxtFile();
    } else if (fileFormat === 'xlsx') {
      downloadExcelFile();
    } else if (fileFormat === 'json') {
      downloadJsonFile();
    }
  };

  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob(['test'], { type: 'text/plain;charset-utf-8' });

    element.href = URL.createObjectURL(file);
    element.download = 'MyReport.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadExcelFile = () => {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');

    XLSX.writeFile(wb, 'MyReport.xlsx');
  };

  const downloadJsonFile = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'MyReport.json';
    link.click();
  };

  const getData = async (title) => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?&origin=*&action=query&prop=extracts&format=json&exintro=&titles=${title}`
    ).then((response) => response.json());

    setWikiData(Object.values(response.query.pages)[0].extract);
    setIsLoading(false);
    console.log(response);
    console.log(response.query.pages);
    console.log(Object.values(response.query.pages)[0].extract);
  };

  return (
    <>
      <article
        className={
          styles.modal + ' ' + (!props.modalOpen && styles['modal--inactive'])
        }
      >
        <div className={styles.modal__content}>
          <div
            className={
              styles.modal__body
              // +
              // ' ' +
              // (props.variant === 'thanks' && styles['body--noPadding'])
            }
          >
            {/* {props.variant === 'download' ? (
              <div
                className={styles.wrapper + ' ' + styles['wrapper--download']}
              >
                <h2>file format</h2>
                <div
                  className={styles.wrapper + ' ' + styles['wrapper--buttons']}
                >
                  <label
                    class={
                      styles['input-button'] +
                      ' ' +
                      (fileFormat === 'csv' && styles['active'])
                    }
                  >
                    <input
                      type='radio'
                      name='options'
                      id='option1'
                      className={styles['radio-button']}
                      autocomplete='off'
                      value='csv'
                      onClick={(e) => setFileFormat(e.target.value)}
                    />
                    csv
                  </label>
                  <label
                    class={
                      styles['input-button'] +
                      ' ' +
                      (fileFormat === 'txt' && styles['active'])
                    }
                  >
                    <input
                      type='radio'
                      name='options'
                      id='option1'
                      className={styles['radio-button']}
                      autocomplete='off'
                      value='txt'
                      onClick={(e) => setFileFormat(e.target.value)}
                    />
                    txt
                  </label>
                  <label
                    class={
                      styles['input-button'] +
                      ' ' +
                      (fileFormat === 'xlsx' && styles['active'])
                    }
                  >
                    <input
                      type='radio'
                      name='options'
                      id='option2'
                      className={styles['radio-button']}
                      autocomplete='off'
                      value='xlsx'
                      onClick={(e) => setFileFormat(e.target.value)}
                    />
                    xlsx
                  </label>
                  <label
                    class={
                      styles['input-button'] +
                      ' ' +
                      (fileFormat === 'json' && styles['active'])
                    }
                  >
                    <input
                      type='radio'
                      name='options'
                      id='option3'
                      className={styles['radio-button']}
                      autocomplete='off'
                      value='json'
                      onClick={(e) => setFileFormat(e.target.value)}
                    />
                    json
                  </label>
                </div>
                <CSVLink
                  {...csvReport}
                  ref={csvLink}
                  className={styles['button--csv']}
                >
                  Download me
                </CSVLink>
                <ModalButton
                  text='Download'
                  onClick={handleDownload}
                  variant='reject'
                />
              </div> */}

            <div>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <article>
                  <div>
                    <h2 className={styles.body__heading}>{props.data.name}</h2>
                    <h3 className={styles.body__subheading}>Overview</h3>
                    {/* <h3 className={styles.body__subheading}>
                      Body system: {props.data.tag} system
                    </h3> */}
                    {/* <h4>{props.data.percentage}%</h4> */}
                    <div
                      className={styles['body__wrapper']}
                      dangerouslySetInnerHTML={{ __html: wikiData && wikiData }}
                    ></div>
                    <h3 className={styles.body__subheading}>Your next steps</h3>
                    <div
                      className={styles['body__wrapper']}
                      dangerouslySetInnerHTML={{ __html: wikiData && wikiData }}
                    ></div>
                  </div>
                  <br />
                  <div>
                    <h3>
                      Don't know some of the words here?{' '}
                      <a href={LearnMoreUrl} target='_blank'>
                        Learn more
                      </a>
                    </h3>
                  </div>
                </article>
              )}
            </div>
          </div>
          <div className={styles.modal__footer}>
            <ModalButton
              text='close'
              onClick={() => props.setModalOpen(false)}
            />
          </div>
        </div>
      </article>
    </>
  );
};

/*

  //  <article className={styles.container}>
            //   <img
            //     src={thanksImage}
            //     alt='thank you image'
            //     className={styles.body__image}
            //   />
            //   <div>
            //     <h2
            //       className={
            //         styles.body__heading + ' ' + styles['heading--big']
            //       }
            //     >
            //       Thank You!
            //     </h2>
            //     <p className={styles.body__description}>
            //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
            //       Exercitationem beatae perspiciatis alias quae ratione
            //       deleniti.
            //     </p>
            //   </div>
            // </article>


*/

export default Modal;
