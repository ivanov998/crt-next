import React, { useCallback, useEffect, useState } from 'react';
import { ICongruenceInputProps } from '../types/CongruenceProps';
import { moduliSchema, remainderSchema } from '../utils/Validations';
import { z } from 'zod';
import { InputField, IValidationErrors } from '../types/CalculatorProps';

const CongruenceInput: React.FC<ICongruenceInputProps> = ({
  index,
  remainder,
  modulo,
  handleValues,
  handleDelete,
}) => {
  const [remainderValidationErrors, setRemainderValidationErrors] =
    useState<IValidationErrors>({
      inputError: false,
      errorMessages: [],
    });

  const [moduloValidationErrors, setModuloValidationErrors] =
    useState<IValidationErrors>({
      inputError: false,
      errorMessages: [],
    });

  // Should be refactored in the future; Otherwise it works perfectly fine for now
  const validateFields = async (inputFieldName: InputField, value: string) => {
    try {
      if (inputFieldName === 'remainder') {
        remainderSchema.parse(value);
        setRemainderValidationErrors({
          inputError: false,
          errorMessages: [],
        });
      }
      if (inputFieldName === 'modulo') {
        moduliSchema.parse(value);
        setModuloValidationErrors({
          inputError: false,
          errorMessages: [],
        });
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        if (inputFieldName === 'remainder') {
          setRemainderValidationErrors({
            inputError: true,
            errorMessages: e.errors,
          });
        }
        if (inputFieldName === 'modulo') {
          setModuloValidationErrors({
            inputError: true,
            errorMessages: e.errors,
          });
        }
      }
    }
  };

  // When randomizing takes place, validate the fields yet again in order to clear mistakes
  useEffect(() => {
    validateFields('remainder', remainder as string);
    validateFields('modulo', modulo as string);
  }, [remainder]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFieldName: InputField = e.target.name as InputField;
    const value: string = e.target.value;

    handleValues({ index, [inputFieldName]: value });
    validateFields(inputFieldName, value);
  };

  return (
    <div className='congruence-wrapper mb-3'>
      {(remainderValidationErrors.inputError ||
        moduloValidationErrors.inputError) && (
        <p
          className='bg-danger text-white px-2 py-1 rounded mb-3 fs-5'
          dangerouslySetInnerHTML={{
            __html: remainderValidationErrors.errorMessages
              .concat(moduloValidationErrors.errorMessages)
              .map((error) => error.message)
              .join('\n')
              .replace(/\n/g, '<br />'),
          }}
        ></p>
      )}
      <div className='congruence rounded-start shadow-sm d-inline-block py-1 ps-3 ps-lg-4 me-0 me-lg-2 pe-3'>
        <strong>x</strong>
        <span className='ms-3'>≡</span>
        <input
          type='number'
          name='remainder'
          className={`text-center fw-bold text-primary mx-2 ${
            remainderValidationErrors.inputError &&
            'border border-danger text-danger'
          }`}
          placeholder='a'
          value={remainder}
          onChange={(e) => handleOnChange(e)}
          onFocus={(e) => e.target.select()}
        />
        <span>(mod</span>
        <input
          type='number'
          name='modulo'
          className={`text-center fw-bold text-primary mx-2 ${
            moduloValidationErrors.inputError &&
            'border border-danger text-danger'
          }`}
          placeholder='n'
          value={modulo}
          onChange={(e) => handleOnChange(e)}
          onFocus={(e) => e.target.select()}
        />
        <span>)</span>
      </div>

      <button
        onClick={() => handleDelete(index)}
        className='btn fs-4 text-danger'
        type='button'
        aria-label='Delete'
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
