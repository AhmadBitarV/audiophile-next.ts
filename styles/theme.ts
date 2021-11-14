import { createTheme } from '@material-ui/core/styles';

const fontFamily = '"Manrope", sans-serif';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },

  palette: {
    primary: {
      light: '#fbaf85',
      main: '#D87D4A',
    },

    common: {
      black: '#000000',
      white: '#ffffff',
    },

    grey: {
      '50': '#FAFAFA',
      '100': '#F1F1F1',
    },
  },

  typography: {
    fontFamily: fontFamily,
    h1: {
      fontFamily: fontFamily,
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: '3.625rem',
      letterSpacing: '2px',
    },

    h2: {
      fontFamily: fontFamily,
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: '2.75rem',
      letterSpacing: '1.5px',
    },

    h3: {
      fontFamily: fontFamily,
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.25rem',
      letterSpacing: '1.15px',
    },

    h4: {
      fontFamily: fontFamily,
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: '2.375rem',
      letterSpacing: '2px',
    },

    h5: {
      fontFamily: fontFamily,
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '2.0625rem',
      letterSpacing: '1.7px',
    },

    h6: {
      fontFamily: fontFamily,
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
      letterSpacing: '1.3px',
    },

    overline: {
      fontFamily: fontFamily,
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.1875rem',
      letterSpacing: '10px',
    },

    subtitle1: {
      fontFamily: fontFamily,
      fontSize: '0.8125rem',
      fontWeight: 700,
      lineHeight: '1.5625rem',
      letterSpacing: '1px',
    },

    body1: {
      fontFamily: fontFamily,
      fontSize: '0.9375rem',
      fontWeight: 500,
      lineHeight: '1.5625rem',
    },

    button: {
      fontFamily: fontFamily,
      fontSize: '0.8125rem',
      letterSpacing: '1px',
      fontWeight: 700,
    },
  },
});

export default theme;
