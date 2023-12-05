import { extendTheme } from '@chakra-ui/react';

// TODO: Add colors from figma to theme and etc.

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '700',
      },
      variants: {
        h1: {
          fontSize: '34px',
        },
        h2: {
          fontSize: '26px',
        },
        h3: {
          fontSize: '22px',
        },
        h4: {
          fontSize: '18px',
        },
        h5: {
          fontSize: '16px',
        },
        h6: {
          fontSize: '12px',
        },
      },
    },
  },
});

export default theme;
