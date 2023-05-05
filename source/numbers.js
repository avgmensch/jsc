//@ts-check

export const zero = "(+[])";
export const one = "(+!![])";

/**
 * @param {number} n Number to convert
 * @returns {string} Number in in the wired format
 */
export const getNumber = (n) => {
  if (n == 0) {
    return zero;
  }
  return Array.from({ length: n }, () => one).join("+");
};
