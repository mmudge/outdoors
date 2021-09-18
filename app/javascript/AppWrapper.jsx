import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { createTheme, ThemeProvider } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { green, amber, grey } from '@material-ui/core/colors'
import Navbar from './components/Navbar'
import Parks from './components/parks/Parks'
import Home from './components/home/Home'


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

// home path '/' must be last or all paths will match
const routes = [
  { path: '/national_parks', component: <Parks />},
  { path: '/', component: <Home />}
]

const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={theme.palette.grey[50]}>
        <Router>
          <Navbar />
          <Switch>
            {
              routes.map((route) => {
                return (
                  <Route path={route.path}>
                    {route.component}
                  </Route>
                )
              })
            }
          </Switch>
        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default AppWrapper