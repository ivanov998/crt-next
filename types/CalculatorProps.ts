import { ReactNode } from 'react';

export interface ICalculatorOptions {
  steps: boolean;
  solution: boolean;
  practice: boolean;
  allSolutions: boolean;
}

export interface ICalculatorOptionButtonProps {
  name: string;
  children: ReactNode;
  selected: boolean;
  option: keyof ICalculatorOptions;
  handleOnClick: (option: keyof ICalculatorOptions) => void;
}

export interface ISolutionStepProps {
  stepNumber: Number;
  title: string;
  description: string;
  text: string;
  commonFailure?: boolean;
}
