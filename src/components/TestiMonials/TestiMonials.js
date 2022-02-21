import React, { useEffect, useState, useRef } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './TestiMonials.css';

import Modal from '../Modal/Modal';

const TestiMonials = () => {
  const [modalClicked, setModalClicked] = useState(false);
  const [currentCardPosition, setCurrentCardPosition] = useState(0);
  let carousel = useRef(null);

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
  ];

  //Owl Carousel Settings
  const options = {
    loop: false,
    rewind: true,
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
    <div className='testimonial_container'>
      <section id='testimonial' className='testimonials pt-70 pb-70'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-12' className='carousel_container'>
              <BsFillArrowLeftCircleFill
                className='carousel__icon icon--left'
                onClick={() => carousel.current.prev(1000)}
              />
              <OwlCarousel
                ref={carousel}
                id='customer-testimonoals'
                className='owl-carousel owl-theme'
                {...options}
              >
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
              <BsFillArrowRightCircleFill
                className='carousel__icon'
                onClick={() => carousel.current.next(1000)}
              />
            </div>
            {/* <button
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
            </button> */}
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
    </div>
  );
};

export default TestiMonials;
