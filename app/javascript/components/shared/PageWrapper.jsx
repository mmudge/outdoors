import React from 'react'
import { Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh'
  },
}))

const PageWrapper = (props) => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="md">
      <Box py={10}>
        { props.children }
      </Box>
    </Container>
  )
}

export default PageWrapper
