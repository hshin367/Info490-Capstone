const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const sizes = {
  xxs: "320px",
  xs: "375px",
  sm: "576px",
  m: "768px",
  l: "1024px",
  xl: "1300px",
  xxl: "1400px",
};

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  dark_blue: "#0C0745",
  light_blue: "rgba(183, 189, 211, 0.75)",
  grey: "rgba(255, 255, 255, 0.35)",
};

const theme = {
  fontSizes,
  colors,
  sizes,
  paddings,
  margins,
  interval,
  verticalInterval,
};

export default theme;
