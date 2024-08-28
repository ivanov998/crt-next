import type { NextPage } from 'next';
import CongruenceForm from '../components/CongruenceForm';
import SolutionStep from '../components/SolutionStep';
import { useEffect, useRef, useState } from 'react';
import { ICalculatorOptions, ISolutionResult } from '../types/CalculatorProps';
import CalculatorOptions from '../components/CalculatorOptions';
import Solution from '../components/Solution';
import ClearResultButton from '../components/ClearResultButton';
import loadContent from '../utils/LoadContent';
import Link from 'next/link';

export async function getStaticProps() {
  const introText = await loadContent('introduction');
  return { props: { introText } };
}

const Home: NextPage = ({ introText }: any) => {
  const [calculatorOptions, setCalculatorOptions] =
    useState<ICalculatorOptions>({
      steps: true,
      solution: true,
      practice: false,
      moreSolutions: false,
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

    const { steps, solution, practice, moreSolutions } = loadedOptions;

    setCalculatorOptions({
      steps,
      solution,
      practice,
      moreSolutions,
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

  // can handle both set and clear result
  const handleSetResult = (result?: ISolutionResult): void => {
    setBufferedCalculatorOptions({ ...calculatorOptions });
    setResult(result);
  };

  return (
    <>
      <p className='brief-description d-none d-lg-block px-5 rounded-3 fs-4 py-3 mx-3 mx-lg-5'>
        Welcome to our Chinese Remainder Theorem solver! This tool helps you
        easily solve systems of simultaneous congruences while providing
        step-by-step explanations. Whether you're a student, a math enthusiast,
        or someone in need of practical applications, our solver simplifies
        complex calculations and guides you through the process with clear,
        detailed instructions.
      </p>
      <div className='row g-0 mt-md-3 mt-lg-5'>
        <div className='col-md-6 col-lg-5 col-xl-6 d-flex justify-content-center mb-3 mb-md-0'>
          <CongruenceForm setResult={handleSetResult} />
        </div>
        <div className='col-md-6 col-lg-7 col-xl-6'>
          <CalculatorOptions
            calculatorOptions={calculatorOptions}
            handleOnClick={handleCalculatorOptionClick}
          />
        </div>
      </div>
      {result && (
        <div className='px-lg-5 mt-3 mt-lg-5 fw-bold' ref={resultRef}>
          {bufferedCalculatorOptions.solution && (
            <Solution
              result={result}
              calculatorOptions={bufferedCalculatorOptions}
            />
          )}
          <ClearResultButton handleOnClick={() => handleSetResult()} />
          {bufferedCalculatorOptions.steps && (
            <>
              <h2 className='text-center mt-5'>Steps</h2>
              {result.steps &&
                result.steps.map((item, index) => (
                  <SolutionStep
                    key={index}
                    stepNumber={index + 1}
                    title={item.title}
                    description={item.description}
                    text={item.text}
                    failureText={item.failureText}
                  />
                ))}
            </>
          )}
          {!bufferedCalculatorOptions.solution && (
            <Solution
              result={result}
              calculatorOptions={bufferedCalculatorOptions}
            />
          )}
        </div>
      )}
      <div className='px-3 px-lg-5 mt-5'>
        <div
          className='mt-5 fw-bold'
          dangerouslySetInnerHTML={{ __html: introText }}
        ></div>
        <Link href='/about' className='fs-4'>
          Learn more...
        </Link>
      </div>
    </>
  );
};

export default Home;
