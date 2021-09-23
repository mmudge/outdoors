import React from 'react'
import { Container, Box } from '@material-ui/core'

const PageWrapper = (props) => {
  return (
    <Container maxWidth="md">
      <Box pt={20} pb={10}>
        { props.children }
      </Box>
    </Container>
  )
}

export default PageWrapper
