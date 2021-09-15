import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import NavBar from './components/NavBar'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { green, amber } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: green,
    secondary: amber
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
            <NationalParks />
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

function NationalParks() {
  return <h2>National Parks</h2>;
}

export default AppWrapper
