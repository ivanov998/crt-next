import { ISolutionResult, ISolutionStep } from '../types/CalculatorProps';
import { ICongruenceInput } from '../types/CongruenceProps';

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const areCoprime = (a: number, b: number): boolean => gcd(a, b) === 1;

const generateRandomNumber = (max?: number): number =>
  Math.floor(Math.random() * (max || 20)) + 2;

// This is a different than areCoprime; This function checks all the moduli
export const areModuliCoprime = (congruences: ICongruenceInput[]): boolean =>
  congruences.every((congruence, index) =>
    congruences
      .slice(index + 1)
      .every((nextCongruence) =>
        areCoprime(Number(congruence.modulo), Number(nextCongruence.modulo))
      )
  );

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

export const solveCRT = (congruences: ICongruenceInput[]): ISolutionResult => {
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
                Number(congruence.modulo),
                Number(nextCongruence.modulo)
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

  // Product of all the moduli
  const prod: number = congruences.reduce(
    (acc: number, val) => acc * Number(val.modulo),
    1
  );

  const resultSum = congruences.reduce((sum, congruence, index) => {
    const p = prod / Number(congruence.modulo);
    return (
      sum +
      Number(congruences[index].remainder) *
        modularMultiplicativeInverse(p, Number(congruence.modulo)) *
        p
    );
  }, 0);

  const result = `${(resultSum % prod).toString()} + ${prod}k`;

  const steps: ISolutionStep[] = [
    coprimalityCheckStep,
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
            `M${index + 1} = ${prod} / ${congruence.modulo} = ${
              prod / Number(congruence.modulo)
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
            `Y${index} = ${modularMultiplicativeInverse(
              prod / Number(congruence.modulo),
              Number(congruence.modulo)
            )}`
        )
        .join('\n'),
      failureText: 'Common step of failure',
    },
    {
      title: 'Calculate the Solution',
      description: 'Substitute the values',
      text: `X = ${congruences
        .map(
          (congruence) =>
            `(${congruence.remainder} x ${
              prod / Number(congruence.modulo)
            } x ${modularMultiplicativeInverse(
              prod / Number(congruence.modulo),
              Number(congruence.modulo)
            )})`
        )
        .join(
          ' + '
        )} = ${resultSum}\nx = ${resultSum} (mod ${prod})\nAfter modular reduction\nx = ${
        resultSum % prod
      } (mod ${prod})`,
      failureText: 'Common step of failure',
    },
  ];

  return {
    areModuliCoprime: true,
    result,
    steps,
  };
};

const modularMultiplicativeInverse = (a: number, modulus: number) => {
  const b = a % modulus;

  for (let hipothesis = 1; hipothesis <= modulus; hipothesis++) {
    if ((b * hipothesis) % modulus === 1) return hipothesis;
  }

  return 1;
};
