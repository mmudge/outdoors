import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar'

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
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
