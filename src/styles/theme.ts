import { theme as chakraTheme } from '@chakra-ui/core/dist';

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      500: '#56ab2f',
    },
  },
};

export default theme;
