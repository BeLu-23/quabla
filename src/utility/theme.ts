import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
      tertiary: Palette['primary'];
    }
    interface PaletteOptions {
      tertiary?: PaletteOptions['primary'];
    }
  }

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#242424',
    },
    info: {
        main: '#48C6A9',
    },
    tertiary: {
      main: '#52BD95',
    },
    warning: {
      main: '#bfbfbf',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//         },
    //   },
    // },
//   },
});

export default theme;