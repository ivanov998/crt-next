import { z, ZodNumber, ZodString, ZodUnion } from 'zod';

const remainderValidationObject = z.union([
  z.string().min(0),
  z
    .number()
    .int()
    .min(-10000, 'a cannot be less than -10000!')
    .max(10000, { message: 'a cannot exceed 10000!' }),
]);

const moduliValidationObject = z.union([
  z.string().min(0),
  z
    .number()
    .int()
    .min(2, { message: 'n cannot be less than 2!' })
    .max(10000, { message: 'n cannot exceed 10000' }),
]);

const validateObject = (
  validationObject: ZodUnion<[z.ZodString, z.ZodNumber]>
) => z.preprocess((val) => (val === '' ? val : Number(val)), validationObject);

export const remainderSchema = validateObject(remainderValidationObject);

export const moduliSchema = validateObject(moduliValidationObject);

// We use separate preproccessing for the combined schema, because we allow empty string for the indiviual fields,
// but they must not be allowed when checking if all congruences are correct
export const congruenceInputSchema = z
  .object({
    remainder: z.preprocess(
      (val) => (val === '' ? val : val === '0' ? 0 : Number(val)),
      remainderValidationObject
    ),
    modulo: z.preprocess((val) => Number(val) || NaN, moduliValidationObject),
  })
  .array();
