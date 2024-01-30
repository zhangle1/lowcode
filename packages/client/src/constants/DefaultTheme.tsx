export const light: ColorType = {};

export const dark: ColorType = {};

export const theme: Theme = {
  colors: {},
  fontWeights: [0, 400, 500, 700],
};

interface ColorType {}

export interface Theme {
  colors: any;
  fontWeights: Array<number>;

}
