import React, { useEffect, useState, useRef } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './TestiMonials.css';

import Modal from '../Modal/Modal';

const TestiMonials = () => {
  const [modalClicked, setModalClicked] = useState(false);
  const [currentCardPosition, setCurrentCardPosition] = useState(0);
  let carousel = useRef(null);

  // owl-item cloned active center

  const testiMonials = [
    {
      name: 'Kaggle',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      address: 'USA',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kaggle_logo.png/640px-Kaggle_logo.png',
    },
    {
      name: 'Brandon Savage',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      address: 'USA',
      img: 'https://volsiz.ru/wp-content/uploads/2021/12/google.jpg',
    },
    {
      name: 'Steve Burns',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      address: 'USA',
      img: 'https://dummyimage.com/600x400/000/00ffbf.jpg&text=logo',
    },
    {
      name: 'Kevin Canlas',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      address: 'USA',
      img: 'https://dummyimage.com/600x400/000/00ffbf.jpg&text=LOGO',
    },
    // {
    //   name: 'hello 1',
    //   description:
    //     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //   address: 'boi 1',
    //   img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg',
    // },
  ];

  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
    mouseDrag: false,
    touchDrag: false,
  };

  useEffect(() => {
    if (!modalClicked) {
      carousel.current.to(currentCardPosition, 0);
    }
  }, [modalClicked]);

  return (
    <main className='testimonial_container'>
      <section id='testimonial' className='testimonials pt-70 pb-70'>
        <div className='container mt-5'>
          {/* <h4 className='miniTitle text-center'>Here are the resources we use</h4>
          <div className='text-center '>
            <h3 className='sectionTitle'>What Our Clients are Saying?</h3>
          </div>
          <p className='text-center '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p> */}
          <div className='row'>
            <div className='col-md-12' className='carousel_container'>
              <button
                className='button_carousel'
                onClick={() => carousel.current.prev(1000)}
              >
                Left
              </button>
              <OwlCarousel
                ref={carousel}
                id='customer-testimonoals'
                className='owl-carousel owl-theme'
                {...options}
              >
                {/* {testiMonials.length === 0 ? (
                  <div className='item'>
                    <div className='shadow-effect'>
                      <img className='img-circle' src={userPic} />

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                    <div className='testimonial-name'>
                      <h5>Rajon Rony</h5>
                      <small>ITALY</small>
                    </div>
                  </div>
                ) : (
      
                )} */}
                {testiMonials.map((testiMonialDetail, i) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={i}
                      position={i}
                      setModalOpen={setModalClicked}
                      setCardPosition={setCurrentCardPosition}
                    />
                  );
                })}
              </OwlCarousel>
              <button
                className='button_carousel'
                onClick={() => carousel.current.next(1000)}
              >
                right
              </button>
            </div>
            <button
              onClick={() => {
                carousel.current.stop();
                console.log('clicked stop');
              }}
            >
              Stop
            </button>
            <button
              onClick={() => {
                carousel.current.play(1000, 450);
                console.log('clicked play');
              }}
            >
              Play
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setModalClicked(true);
              }}
            >
              open modal
            </button>
          </div>
        </div>
      </section>
      {modalClicked && (
        <Modal
          modalOpen={modalClicked}
          setModalOpen={setModalClicked}
          cardPosition={currentCardPosition}
          parent={carousel}
        />
      )}
    </main>
  );
};

export default TestiMonials;
