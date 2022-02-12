import React, { useRef } from 'react';

const TestiMonialsDetails = ({
  testiMonialDetail,
  setModalOpen,
  position,
  setCardPosition,
}) => {
  const card = useRef(null);
  const { img } = testiMonialDetail;

  let handleClick = () => {
    console.log('hello', card.current.parentNode.className.includes('active'));
    if (card.current.parentNode.className == 'owl-item active center') {
      console.log(position);
      setCardPosition(position);
      setModalOpen(true);
    }
  };

  return (
    <div className='item' onClick={handleClick} ref={card}>
      <div className='shadow-effect'>
        <img className='img' src={img} />
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
