// max inclusive 0 ~ 10, then includes 10 in ranNum
export const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// left or right
export const randomDir = () => {
  // true = right or bottom
  // false = left or top
  let dir = randomNum(0, 1) === 1 ? true : false;

  return dir;
};
