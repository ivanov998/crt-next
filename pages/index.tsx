import type { NextPage } from 'next';
import CongruenceForm from '../components/CongruenceForm';
import CalculatorOptionButton from '../components/CalculatorOptionButton';
import SolutionStep from '../components/SolutionStep';
import { useEffect, useRef, useState } from 'react';
import { ICalculatorOptions, ISolutionResult } from '../types/CalculatorProps';

const Home: NextPage = () => {
  const [calculatorOptions, setCalculatorOptions] =
    useState<ICalculatorOptions>({
      steps: true,
      solution: true,
      practice: false,
      allSolutions: false,
    });

  // Changed only upon solve button submission in order to prevent unwanted behaviour when changing the options after submission
  const [bufferedCalculatorOptions, setBufferedCalculatorOptions] =
    useState<ICalculatorOptions>({ ...calculatorOptions });

  const [result, setResult] = useState<ISolutionResult>();

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [result]);

  useEffect(() => {
    const loadedOptions: ICalculatorOptions = JSON.parse(
      localStorage.getItem('optionPreferences') as string
    ) as ICalculatorOptions;

    if (!loadedOptions) return;

    const { steps, solution, practice, allSolutions } = loadedOptions;

    setCalculatorOptions({
      steps,
      solution,
      practice,
      allSolutions,
    });
  }, []);

  const handleCalculatorOptionClick = (option: keyof ICalculatorOptions) => {
    const newOptions = {
      ...calculatorOptions,
      [option]: !calculatorOptions[option],
    };

    setCalculatorOptions(newOptions);

    localStorage.setItem('optionPreferences', JSON.stringify(newOptions));
  };

  const handleSetResult = (result: ISolutionResult): void => {
    setBufferedCalculatorOptions({ ...calculatorOptions });
    setResult(result);
  };

  return (
    <>
      <p className='brief-description d-none d-lg-block px-5 rounded-3 fs-5 py-3 shadow-sm mx-3 mx-lg-5 text-'>
        The Chinese Remainder Theorem (CRT) is a powerful mathematical concept
        with numerous applications in number theory, cryptography, and computer
        science. However, solving CRT problems can be challenging and
        time-consuming. But not anymore! With our free online tool, you can
        effortlessly solve Chinese Remainder Theorem problems in no time.
      </p>
      <div className='row g-0 mt-md-3 mt-lg-5'>
        <div className='col-md-6 col-lg-5 col-xl-6 d-flex justify-content-center mb-3 mb-md-0'>
          <CongruenceForm setResult={handleSetResult} />
        </div>
        <div className='col-md-6 col-lg-7 col-xl-6'>
          <div className='d-flex justify-content-evenly flex-wrap mt-3 mt-md-0'>
            <CalculatorOptionButton
              name='Explain steps'
              selected={calculatorOptions.steps}
              option={'steps'}
              handleOnClick={handleCalculatorOptionClick}
            >
              <i className='la la-lightbulb-o main-icon fs-1 mb-2 text-muted'></i>
            </CalculatorOptionButton>
            <CalculatorOptionButton
              name='Solution first'
              selected={calculatorOptions.solution}
              option='solution'
              handleOnClick={handleCalculatorOptionClick}
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
              handleOnClick={handleCalculatorOptionClick}
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
              name='All solutions'
              selected={calculatorOptions.allSolutions}
              option={'allSolutions'}
              handleOnClick={handleCalculatorOptionClick}
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
                className='icon icon-tabler icon-tabler-infinity main-icon fs-1 mb-2 text-muted'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828'></path>
              </svg>
            </CalculatorOptionButton>
          </div>
        </div>
      </div>
      {result && (
        <div className='px-lg-5 mt-3 mt-lg-5 fw-bold' ref={resultRef}>
          <div>
            <h2 className='text-center'>Solution</h2>
            <div className='p-1 shadow-sm step-wrapper mb-3 text-center'>
              <p className='fs-4 mb-0'>
                {result.areModuliCoprime
                  ? 'X = 348 + 385k'
                  : 'There is no solution, because the moduli are not pairwise coprime.'}
              </p>
            </div>
          </div>
          {result.areModuliCoprime && bufferedCalculatorOptions.steps && (
            <>
              <h2 className='text-center mt-5'>Steps</h2>
              <SolutionStep
                stepNumber={1}
                title='Product of the Moduli'
                description='Calculate the product N of all the moduli.'
                text='N=3×5×7=105'
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
