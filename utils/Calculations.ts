import { ICongruenceInput } from '../types/CongruenceProps';

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const areCoprime = (a: number, b: number): boolean => gcd(a, b) === 1;

const generateRandomNumber = (max?: number) =>
  Math.floor(Math.random() * (max || 20)) + 2;

export const generateRandomCongruences = (
  count: number
): ICongruenceInput[] => {
  const congruences: ICongruenceInput[] = [];

  while (congruences.length < count) {
    const candidate = generateRandomNumber(count * 5);

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
