import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { createTheme, ThemeProvider } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { green, amber, grey } from '@material-ui/core/colors'
import NavBar from './components/NavBar'
import Parks from './components/parks/Parks'


const theme = createTheme({
  palette: {
    primary: {
      light: green[700],
      main: green[800],
      dark: green[900]
    },
    secondary: amber,
    text: {
      primary: grey[800],
      secondary: grey[600]
    }
  }
})

const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={theme.palette.grey[50]}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/national_parks">
              <Parks />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Box>
    </ThemeProvider>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default AppWrapper
