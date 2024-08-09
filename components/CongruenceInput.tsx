import React from 'react';

const CongruenceInput: React.FC = () => {
  return (
    <div className='congruence-wrapper mb-3'>
      <div className='congruence rounded-start shadow-sm d-inline-block py-1 ps-3 ps-lg-4 me-2 me-lg-4'>
        <strong>x</strong>
        <span className='ms-3'>≡</span>
        <input
          type='number'
          className='text-center fw-bold text-primary mx-2'
          placeholder='a'
        />
        <span>(mod</span>
        <input
          type='number'
          className='text-center fw-bold text-primary mx-2'
          placeholder='n'
        />
        <span>)</span>
        <span className='fs-6 text-danger ms-3 align-text-top'></span>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        fill='currentColor'
        viewBox='0 0 16 16'
        className='bi bi-x-lg text-danger fs-5'
      >
        <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z'></path>
      </svg>
    </div>
  );
};

export default CongruenceInput;
