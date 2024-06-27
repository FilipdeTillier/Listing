export const MIN_SALARY = 0;
export const MAX_SALARY = 50000;

export const CURRENCY = {
  PLN: "PLN",
} as const;

export type TCurrency = (typeof CURRENCY)[keyof typeof CURRENCY];
