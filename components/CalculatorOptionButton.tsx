import React, { ReactNode } from 'react';

interface ICalculatorOptionButtonProps {
  name: string;
  hashtag: string;
  children: ReactNode;
}

const CalculatorOptionButton: React.FC<ICalculatorOptionButtonProps> = ({
  name,
  hashtag,
  children,
}) => {
  return (
    <div className='d-inline-block'>
      <input type='checkbox' id={`btn-${hashtag}`} className='btn-check' />
      <label
        className='form-label d-inline-flex flex-column justify-content-center align-items-center btn mx-sm-2 py-lg-4 position-relative shadow-sm mb-3'
        data-bs-toggle='tooltip'
        data-bss-tooltip=''
        htmlFor={`btn-${hashtag}`}
        title='Get a comprehensive breakdown of each step in solving CRT problems'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          fill='currentColor'
          viewBox='0 0 16 16'
          className='bi bi-circle circle-icon position-absolute text-muted fs-5'
        >
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'></path>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          fill='currentColor'
          viewBox='0 0 16 16'
          className='bi bi-check-circle-fill d-none circle-icon position-absolute fs-5'
        >
          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
        </svg>
        {children}
        <span className='fw-bold'>{name}</span>
        <span className='text-muted'>
          #{hashtag}&nbsp;
          <a
            className='text-decoration-none text-primary'
            href='#steps'
            aria-label='Explain Steps'
          >
            <i className='la la-external-link'></i>
          </a>
        </span>
      </label>
    </div>
  );
};

export default CalculatorOptionButton;
