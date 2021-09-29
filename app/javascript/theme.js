
import { green, amber, grey } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core'


const theme = createTheme({
  palette: {
    primary: {
      light: green[700],
      main: green[800],
      dark: green[900]
    },
    secondary: {
      light: amber[500],
      main: amber[600],
      dark: amber[700]
    },
    text: {
      primary: grey[800],
      secondary: grey[600]
    }
  }
})

export default theme
