import React, { useState } from 'react';
import { ICongruenceInput } from '../types/CongruenceProps';
import CongruenceInput from './CongruenceInput';

const CongruenceForm: React.FC = () => {
  const [congruenceInputs, setCongruenceInput] = useState<ICongruenceInput[]>(
    Array.from({ length: 3 }, () => ({
      remainder: '',
      modulo: '',
    }))
  );

  const setCongruencesValues = ({
    index,
    remainder,
    modulo,
  }: { index: number } & ICongruenceInput) => {
    const values = [...congruenceInputs];

    if (remainder !== undefined) {
      values[index].remainder = remainder;
    }

    if (modulo !== undefined) {
      values[index].modulo = modulo;
    }

    setCongruenceInput(values);
  };

  const removeCongruence = (index: number) => {
    const values: ICongruenceInput[] = [...congruenceInputs];

    if (values.length !== 1) {
      values.splice(index, 1);
      setCongruenceInput(values);
    }
  };

  const renderCongruences = () => {
    return congruenceInputs.map(
      (congruence: ICongruenceInput, index: number) => (
        <CongruenceInput
          key={index}
          index={index}
          remainder={congruence.remainder}
          modulo={congruence.modulo}
          handleValues={setCongruencesValues}
          handleDelete={removeCongruence}
        />
      )
    );
  };

  return (
    <div className='fs-4 text-muted'>
      {renderCongruences()}
      <button className='btn fw-bold w-100 mb-3 mt-2' type='button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          fill='currentColor'
          viewBox='0 0 16 16'
          className='bi bi-plus text-warning fs-2'
        >
          <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'></path>
        </svg>
        &nbsp;Add new congruence
      </button>
      <div className='d-flex justify-content-around'>
        <button
          className='btn btn-secondary px-3 px-lg-4 py-2 shadow-sm rounded-0 fw-bold'
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='icon icon-tabler icon-tabler-sparkles me-2 fs-5'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z'></path>
          </svg>
          RANDOMIZE
        </button>
        <button
          className='btn btn-primary px-3 px-lg-4 py-2 shadow-sm rounded-0 fw-bold'
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            fill='currentColor'
            viewBox='0 0 16 16'
            className='bi bi-check-lg me-2 fs-5'
          >
            <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022'></path>
          </svg>
          SOLVE
        </button>
      </div>
    </div>
  );
};

export default CongruenceForm;
