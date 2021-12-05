import { extendTheme } from '@chakra-ui/react';

const overrides = {
  styles: {
    global: () => ({
      'html, body': {
        overflowX: 'hidden',
        fontSize: '25px',
        scrollBehavior: 'smooth',
        color: '#FFFFFF'
      },
    }),
  },
  textStyles: {
    h1: {
      fontSize: ['40px', '40px'],
      lineHeight: '100%',
      fontWeight:"bold"
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  colors: {
    primary: '#FFFFFF',
  },
  space: {},
  config: {
    cssVarPrefix: 'air-quality',
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
};
export default extendTheme(overrides);
