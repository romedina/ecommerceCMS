import { createMuiTheme } from '@material-ui/core/styles'

const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#008FFD',
      main: '#0E3F67',
      contrastText: '#fff'
    },
    secondary: {
      main: '#008FFD'
    }
  }
})

export default myTheme
