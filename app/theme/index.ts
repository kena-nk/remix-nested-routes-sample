import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const fonts = {
  base: 'Noto Sans JP, "sans-serif"',
  dot: 'DotGothic16, "sans-serif"',
};

export const Text = {
  baseStyle: {
    color: 'gray.900',
    fontFamily: 'base',
  },
  variants: {
    baseBody1: {
      fontSize: '30px',
      lineHeight: 1.5,
      fontWeight: 'bold',
      fontFamily: 'base',
    },
    baseBody2: {
      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: 'bold',
      fontFamily: 'base',
    },
    baseBody3: {
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 'medium',
      fontFamily: 'base',
    },
    dotBody1: {
      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: 'medium',
      fontFamily: 'dot',
    },
    dotBody2: {
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 'medium',
      fontFamily: 'dot',
    },
  },
};

const theme = extendTheme({ components: { Text }, colors, fonts });

export default theme;
