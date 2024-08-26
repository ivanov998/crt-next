import React from 'react';
import { ISolutionProps } from '../types/CalculatorProps';

const Solution: React.FC<ISolutionProps> = ({ result, calculatorOptions }) => {
  return (
    <div>
      <h2 className='text-center'>Solution</h2>
      <div className='p-1 shadow-sm step-wrapper mb-3 text-center fw-bolder'>
        <p className='fs-3 fw-bolder mb-0'>
          {result.areModuliCoprime
            ? `X = ${result.result}`
            : 'There is no solution, because the moduli are not pairwise coprime.'}
        </p>
        {calculatorOptions.moreSolutions && result.solutions?.length && (
          <div className='mt-3 fs-3'>
            <p>50 more solutions:</p>
            <p className='scrollable-text px-2 px-lg-4'>
              {result.solutions?.join(' , ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Solution;
