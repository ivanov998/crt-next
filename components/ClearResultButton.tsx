import React from 'react';
import { IClearResultButtonProps } from '../types/CalculatorProps';

const ClearResultButton: React.FC<IClearResultButtonProps> = ({
  handleOnClick,
}) => {
  return (
    <button
      className='btn fw-bold w-100 mb-3 mt-2'
      type='button'
      onClick={handleOnClick}
    >
      <svg
        className='text-danger fs-2'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708'></path>
      </svg>
      &nbsp;Clear solution
    </button>
  );
};

export default ClearResultButton;
