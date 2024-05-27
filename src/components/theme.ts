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
    tertiary: {
        main: '#48C6A9',
      },
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