import { extendTheme } from '@chakra-ui/react';


const overrides = {
  styles: {
    global: () => ({
      'html, body': {
        overflowX: 'hidden',
        fontSize: '14px',
        scrollBehavior: 'smooth',
      },
    }),
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  space: {},
  config: {
    cssVarPrefix: 'air-quality',
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
};
export default extendTheme(overrides);
