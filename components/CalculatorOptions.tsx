import React from 'react';
import CalculatorOptionButton from './CalculatorOptionButton';
import { ICalculatorOptionsProps } from '../types/CalculatorProps';

const CalculatorOptions: React.FC<ICalculatorOptionsProps> = ({
  calculatorOptions,
  handleOnClick,
}) => {
  return (
    <div className='d-flex justify-content-evenly flex-wrap mt-3 mt-md-0'>
      <CalculatorOptionButton
        name='Explain steps'
        selected={calculatorOptions.steps}
        option={'steps'}
        title='Get a comprehensive breakdown of each step in solving CRT problems'
        handleOnClick={handleOnClick}
      >
        <i className='la la-lightbulb-o main-icon fs-1 mb-2 text-muted'></i>
      </CalculatorOptionButton>
      <CalculatorOptionButton
        name='Solution first'
        selected={calculatorOptions.solution}
        option='solution'
        title='Show the solution before the steps'
        handleOnClick={handleOnClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icon-tabler-target-arrow main-icon fs-1 mb-2 text-muted'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
          <path d='M12 7a5 5 0 1 0 5 5'></path>
          <path d='M13 3.055a9 9 0 1 0 7.941 7.945'></path>
          <path d='M15 6v3h3l3 -3h-3v-3z'></path>
          <path d='M15 9l-3 3'></path>
        </svg>
      </CalculatorOptionButton>
      <CalculatorOptionButton
        name='Practice mode'
        selected={calculatorOptions.practice}
        option={'practice'}
        title='(Under development) Interactive practice mode to help you master solving CRT problems'
        disabled={true}
        handleOnClick={handleOnClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enableBackground='new 0 0 24 24'
          height='1em'
          viewBox='0 0 24 24'
          width='1em'
          fill='currentColor'
          className='main-icon fs-1 mb-2 text-muted'
        >
          <g>
            <path d='M0,0h24v24H0V0z' fill='none'></path>
          </g>
          <g>
            <g>
              <path d='M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z'></path>
              <path d='M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M14.01,15 c-0.59,0-1.05-0.47-1.05-1.05c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04C15.04,14.53,14.6,15,14.01,15z M16.51,8.83 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52c0-0.41-0.06-1.08,0.26-1.65c0.41-0.73,1.18-1.16,1.63-1.8 c0.48-0.68,0.21-1.94-1.14-1.94c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26 C16.87,6.87,17.08,7.99,16.51,8.83z'></path>
            </g>
          </g>
        </svg>
      </CalculatorOptionButton>
      <CalculatorOptionButton
        name='More solutions'
        selected={calculatorOptions.moreSolutions}
        option={'moreSolutions'}
        title='Display 50 possible solutions for X based on the given congruences'
        handleOnClick={handleOnClick}
      >
        <i className='la la-ellipsis-h main-icon fs-1 mb-2 text-muted'></i>
      </CalculatorOptionButton>
    </div>
  );
};

export default CalculatorOptions;
