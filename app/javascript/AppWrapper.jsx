import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { createTheme, ThemeProvider } from '@material-ui/core'
import { green, amber, grey } from '@material-ui/core/colors'
import NavBar from './components/NavBar'
import Parks from './components/parks/Parks'

const theme = createTheme({
  palette: {
    primary: green,
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
