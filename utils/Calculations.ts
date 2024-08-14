import { ISolutionResult } from '../types/CalculatorProps';
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
  const prod: number = congruences.reduce(
    (acc: number, val) => acc * Number(val.modulo),
    1
  );

  const result = (
    congruences.reduce((sum, congruence, index) => {
      const p = prod / Number(congruence.modulo);
      return (
        sum +
        Number(congruences[index].remainder) *
          modularMultiplicativeInverse(p, Number(congruence.modulo)) *
          p
      );
    }, 0) % prod
  ).toString();

  return {
    areModuliCoprime: areModuliCoprime(congruences),
    result,
  };
};

const modularMultiplicativeInverse = (a: number, modulus: number) => {
  const b = a % modulus;

  for (let hipothesis = 1; hipothesis <= modulus; hipothesis++) {
    if ((b * hipothesis) % modulus === 1) return hipothesis;
  }

  return 1;
};
