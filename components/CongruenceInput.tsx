import React from 'react';
import { ICongruenceInputProps } from '../types/CongruenceProps';

const CongruenceInput: React.FC<ICongruenceInputProps> = ({
  index,
  remainder,
  modulo,
  handleValues,
  handleDelete,
}) => {
  return (
    <div className='congruence-wrapper mb-3'>
      <div className='congruence rounded-start shadow-sm d-inline-block py-1 ps-3 ps-lg-4 me-2 me-lg-4'>
        <strong>x</strong>
        <span className='ms-3'>≡</span>
        <input
          type='number'
          className='text-center fw-bold text-primary mx-2'
          placeholder='a'
          value={remainder}
          onChange={(e) => handleValues({ index, remainder: e.target.value })}
        />
        <span>(mod</span>
        <input
          type='number'
          className='text-center fw-bold text-primary mx-2'
          placeholder='n'
          value={modulo}
          onChange={(e) => handleValues({ index, modulo: e.target.value })}
        />
        <span>)</span>
      </div>

      <button
        onClick={() => handleDelete(index)}
        className='btn fs-4 text-danger'
      >
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
      </button>
    </div>
  );
};

export default CongruenceInput;
