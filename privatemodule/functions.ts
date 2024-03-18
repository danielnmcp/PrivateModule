import { add,parseInt } from "lodash";

export const getSum = (a: number, b: string) => {
  return add(a, parseInt(b));
};
