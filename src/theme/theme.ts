import {ViewStyle} from 'react-native';

import {createTheme} from '@shopify/restyle';

export const palette = {
  vilotPrimary: '#7b22d3',
  secondary: '#18E1BD',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  grayBlack: '#000000',
  gray1: '#313131',
  gray2: '#8d8d8d',
  gray3: '#9b9b9b',
  gray4: '#b9b9b9',
  gray5: '#f9f9f9',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.vilotPrimary,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.vilotPrimary,
    buttonSecondary: palette.gray1,

    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s34: 34,
    s40: 40,
    s48: 48,
    s56: 56,
    s64: 64,
    s96: 96,
    s128: 128,
    s192: 192,
    s256: 256,
    s384: 384,
    s512: 512,
    s640: 640,
    s768: 768,
  },
  borderRadii: {
    s8: 8,
    s10: 10,
    s12: 12,
    s16: 16,
    s24: 24,
  },

  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 11,
  shadowColor: '#000',
  shadowRadius: 12,
  shadowOpacity: 0.05,
  shadowOffset: {width: 0, height: -3},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
