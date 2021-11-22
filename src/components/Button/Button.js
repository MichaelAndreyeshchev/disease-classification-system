import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import style from './Button.module.css';

const CustomButton = styled.button`
  display: flex;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'left' ? 'row-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;

  min-width: 100px;
  border: 0;
  border-radius: 100px;

  background: #fff;
  transition: all 0.3s ease-in-out;

  font-size: ${({ size }) => (size === 'big' ? '2rem' : '0.9rem')};
  font-weight: 500;

  &:hover {
    transform: translateY(-0.2rem);
  }
`;

const CustomIcon = styled(BsFillArrowRightCircleFill)`
  width: ${({ size }) => (size === 'big' ? '2rem' : '1.5rem')};
  height: ${({ size }) => (size === 'big' ? '2rem' : '1.5rem')};
  margin-left: ${({ iconPosition }) =>
    iconPosition === 'left' ? '0' : '0.5em'};
  margin-right: ${({ iconPosition }) =>
    iconPosition === 'left' ? '0.5em' : '0'};
  transform: rotate(
    ${({ iconPosition }) => (iconPosition === 'left' ? '180deg' : '0')}
  );
`;

function Button({ text, iconPosition, size, onClick }) {
  return (
    <CustomButton iconPosition={iconPosition} size={size} onClick={onClick}>
      {text}
      <CustomIcon iconPosition={iconPosition} size={size} />
    </CustomButton>
  );
}

export default Button;
