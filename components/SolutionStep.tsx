import React, { useEffect, useState } from 'react';
import { ISolutionStepProps } from '../types/CalculatorProps';

const SolutionStep: React.FC<ISolutionStepProps> = ({
  stepNumber,
  title,
  description,
  text,
  failureText,
}) => {
  const [solutionInfoHidden, setSolutionInfoHidden] = useState<boolean>(false);

  const handleToggleVisibility = () => {
    setSolutionInfoHidden(!solutionInfoHidden);
  };

  useEffect(() => {
    setSolutionInfoHidden(false);
  }, [text]);

  return (
    <div className='p-3 shadow-sm step-wrapper mb-3'>
      <div>
        <h3 className='align-text-top'>
          <span className='number-span fs-3 text-white bg-secondary me-2 py-2 text-center d-inline-block'>
            {stepNumber.toString()}
          </span>
          {title}
        </h3>
      </div>
      <div className={solutionInfoHidden ? 'd-none' : ''}>
        <p className='mt-3 fs-5 text-muted fw-semibold'>{description}</p>
        <p
          className='ms-3 fs-4'
          dangerouslySetInnerHTML={{
            __html: text.replace(/\n/g, '<br />'),
          }}
        ></p>
        {failureText && (
          <p className='mt-3 fw-bolder fs-5 text-danger'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              enableBackground='new 0 0 24 24'
              height='1em'
              viewBox='0 0 24 24'
              width='1em'
              fill='currentColor'
              className='fs-1 me-2 mb-1'
            >
              <g>
                <rect fill='none' height='24' width='24'></rect>
              </g>
              <g>
                <g>
                  <g>
                    <path d='M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z'></path>
                    <polygon points='13,16 11,16 11,18 13,18'></polygon>
                    <polygon points='13,10 11,10 11,15 13,15'></polygon>
                  </g>
                </g>
              </g>
            </svg>
            {failureText}
          </p>
        )}
      </div>
      <span
        className='btn fs-4 mx-auto p-0 w-100'
        onClick={handleToggleVisibility}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          {solutionInfoHidden ? (
            <path
              fillRule='evenodd'
              d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
            ></path>
          ) : (
            <path
              fillRule='evenodd'
              d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
            ></path>
          )}
        </svg>
      </span>
    </div>
  );
};

export default SolutionStep;
