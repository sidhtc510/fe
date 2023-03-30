export const array_1 = [1, 2, 3];
export const array_2 = [2, 2, 3];
export const array_3 = [3, 2, 3];

export default (arr) => {
  return arr.reduce((acc, item) => acc + item, 0);
};
