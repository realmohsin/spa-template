import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
    htmlFontSize: 10,
    h1: {
      // fontFamily: '',
      // fontWeight: 0,
      // fontSize: '0rem',
      // lineHeight: 1,
      // letterSpacing: '-0.01562em'
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {}
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%'
        },
        '::selection': {
          backgroundColor: '',
          color: 'white'
        },
        img: {
          display: 'block',
          width: '100%',
          height: 'auto'
        }
      }
    },
    MuiTypography: {
      paragraph: {
        // default marginBottom: '16px'
      },
      gutterBottom: {
        // default marginBottom: '0.35em'
      }
    },
    MuiButtonBase: {
      disableRipple: true
    }
  }
})

export default theme
