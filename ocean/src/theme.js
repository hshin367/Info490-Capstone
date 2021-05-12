const calcRem = (size) => `${size / 16}rem`;

// there needs to be a difference in the fish name text and the Date, Your Events. (These are larger)
const fontSizes = {
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(30),
  titleSize: calcRem(40),
  xxxxl: calcRem(66),
};

const paddings = {
  none: 0,
  xs: calcRem(3),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(20),
  xxxl: calcRem(24),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(20),
  xxxl: calcRem(24),
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

const borderRadius = {
  base: "15px",
  sm: "10px",
};

const border = {
  thick_solid: "0.5px solid " + colors.white,
  thin_solid: "0.2px solid " + colors.white,
};

const lightBg = {
  gradient: "linear-gradient(180deg, #27569D 32.29%, #112482 100%)",
};

const darkBg = {
  gradient: "linear-gradient(#0E183F, #3B4782);",
};

const theme = {
  fontSizes,
  colors,
  sizes,
  paddings,
  margins,
  interval,
  verticalInterval,
  borderRadius,
  border,
  lightBg,
  darkBg,
};

export default theme;
