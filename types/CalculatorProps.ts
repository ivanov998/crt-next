import { ReactNode } from 'react';
import { z } from 'zod';

export interface ICalculatorOptions {
  steps: boolean;
  solution: boolean;
  practice: boolean;
  moreSolutions: boolean;
}

export interface ICalculatorOptionsProps {
  calculatorOptions: ICalculatorOptions;
  handleOnClick: (option: keyof ICalculatorOptions) => void;
}

export interface ICalculatorOptionButtonProps {
  name: string;
  children: ReactNode;
  selected: boolean;
  option: keyof ICalculatorOptions;
  handleOnClick: (option: keyof ICalculatorOptions) => void;
}

export interface ISolutionStep {
  title: string;
  description: string;
  text: string;
  failureText?: string;
}

export interface ISolutionStepProps extends ISolutionStep {
  stepNumber: Number;
}

export interface ISolutionResult {
  areModuliCoprime: boolean;
  result?: string;
  solutions?: number[];
  steps?: ISolutionStep[];
}

export interface ICongruenceExtended {
  remainder: number;
  modulo: number;
  partialProduct: number;
  multiplicativeInverse: number;
}

export type InputField = 'remainder' | 'modulo';

export interface IValidationErrors {
  inputError: boolean;
  errorMessages: z.ZodIssue[];
}
