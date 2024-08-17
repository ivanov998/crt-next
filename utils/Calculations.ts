import {
  ICongruenceExtended,
  ISolutionResult,
  ISolutionStep,
} from '../types/CalculatorProps';
import { ICongruenceInput } from '../types/CongruenceProps';

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const areCoprime = (a: number, b: number): boolean => gcd(a, b) === 1;

const generateRandomNumber = (max?: number): number =>
  Math.floor(Math.random() * (max || 20)) + 2;

export const generateRandomCongruences = (
  count: number
): ICongruenceInput[] => {
  const congruences: ICongruenceInput[] = [];

  while (congruences.length < count) {
    const candidate = generateRandomNumber(count * 3);

    if (congruences.every((m) => areCoprime(candidate, Number(m.modulo)))) {
      const randomRemainder = generateRandomNumber();

      congruences.push({
        remainder: randomRemainder.toString(),
        modulo: candidate.toString(),
      });
    }
  }

  return congruences;
};

// This is a different than areCoprime; This function checks all the moduli
const areModuliCoprime = (congruences: ICongruenceExtended[]): boolean =>
  congruences.every((congruence, index) =>
    congruences
      .slice(index + 1)
      .every((nextCongruence) =>
        areCoprime(congruence.modulo, nextCongruence.modulo)
      )
  );

const modularMultiplicativeInverse = (a: number, modulus: number) => {
  const b = a % modulus;

  for (let hipothesis = 1; hipothesis <= modulus; hipothesis++) {
    if ((b * hipothesis) % modulus === 1) return hipothesis;
  }

  return 1;
};

export const solveCRT = (input: ICongruenceInput[]): ISolutionResult => {
  // Product of all the moduli
  const prod: number = input.reduce(
    (acc: number, val) => acc * Number(val.modulo),
    1
  );

  // Transform the congruences to their extended variant in order to prevent repetitive computing of values
  const congruences: ICongruenceExtended[] = input.map(
    (congruence): ICongruenceExtended => ({
      remainder: Number(congruence.remainder),
      modulo: Number(congruence.modulo),
      partialProduct: prod / Number(congruence.modulo),
      multiplicativeInverse: modularMultiplicativeInverse(
        prod / Number(congruence.modulo),
        Number(congruence.modulo)
      ),
    })
  );

  const coprime = areModuliCoprime(congruences);

  const coprimalityCheckStep = {
    title: 'Check if the Moduli are Pairwise Coprime',
    description: "Check if each pair of gcd's equals 1",
    text: congruences
      .map((congruence, index) =>
        congruences
          .slice(index + 1)
          .map(
            (nextCongruence) =>
              `gcd (${congruence.modulo}, ${nextCongruence.modulo}) = ${gcd(
                congruence.modulo,
                nextCongruence.modulo
              )}`
          )
          .join('\n')
      )
      .join('\n')
      .trim(),
  };

  if (!coprime) {
    return {
      areModuliCoprime: false,
      steps: [
        {
          ...coprimalityCheckStep,
          failureText:
            'At least one pair of the moduli fails the coprimality check',
        },
      ],
    };
  }

  const resultSum = congruences.reduce((sum, congruence, index) => {
    return (
      sum +
      congruences[index].remainder *
        modularMultiplicativeInverse(
          congruence.partialProduct,
          congruence.modulo
        ) *
        congruence.partialProduct
    );
  }, 0);

  const steps: ISolutionStep[] = [
    {
      title: 'Product of the Moduli',
      description: 'Calculate the product N of all the moduli.',
      text: `M = ${congruences
        .map((congruence) => congruence.modulo)
        .join(' x ')} = ${prod}`,
    },
    {
      title: 'Individual Mi of the Moduli',
      description: 'For each congruence, compute Mi',
      text: congruences
        .map(
          (congruence, index) =>
            `M&sup${index + 1}; = ${prod} / ${congruence.modulo} = ${
              congruence.partialProduct
            }`
        )
        .join('\n'),
    },
    {
      title: 'Find Modular Inverses',
      description: 'For each congruence, find the inversed value',
      text: congruences
        .map(
          (congruence, index) =>
            `Y&#832${index}; = ${congruence.multiplicativeInverse}`
        )
        .join('\n'),
      failureText: 'Common step of failure',
    },
    {
      title: 'Calculate the Solution',
      description: 'Substitute the values',
      text: `x = ${congruences
        .map(
          (congruence) =>
            `(${congruence.remainder} x ${congruence.partialProduct} x ${congruence.multiplicativeInverse})`
        )
        .join(
          ' +\n '
        )}\nx = ${resultSum}\nx = ${resultSum} (mod ${prod})\nAfter modular reduction\nx = ${
        resultSum % prod
      } (mod ${prod})`,
    },
  ];

  if (congruences.length > 1) {
    steps.unshift(coprimalityCheckStep);
  }

  const result = `${(resultSum % prod).toString()} + ${prod}k`;

  return {
    areModuliCoprime: true,
    result,
    steps,
  };
};
