import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { ThemeProvider, Box } from '@material-ui/core'

import Navbar from './components/Navbar'
import Parks from './components/parks/Parks'
import Home from './components/home/Home'
import Park from './components/park/Park.jsx'

import {ApolloProvider} from "@apollo/client"
import client from './apolloClient'
import theme from './theme'

// home path '/' must be last or all paths will match
const routes = [
  { path: '/national_parks/:id', component: <Park/>},
  { path: '/national_parks', component: <Parks />},
  { path: '/', component: <Home />}
]

const AppWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Box bgcolor={theme.palette.grey[50]}>
          <Router forceRefresh={false}>
            <Navbar />
            <Switch>
              {
                routes.map((route) => {
                  return (
                    <Route key={route.path} path={route.path}>
                      {route.component}
                    </Route>
                  )
                })
              }
            </Switch>
          </Router>
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default AppWrapper
