import { z } from 'zod';

export const remainderSchema = z.preprocess((val) => {
  if (val === '') return val;
  if (typeof val === 'string') {
    return Number(val);
  }
  return val;
}, z.union([z.string().min(0), z.number().int().max(10000, { message: 'a&#x2099; cannot exceed 10000!' })]));

export const moduliSchema = z.preprocess((val) => {
  if (val === '') return val;
  if (typeof val === 'string') {
    return Number(val);
  }
  return val;
}, z.union([z.string().min(0), z.number().int().min(2, { message: 'n&#x2099; cannot be less than 2!' }).max(10000, { message: 'n&#x2099; cannot exceed 10000' })]));
