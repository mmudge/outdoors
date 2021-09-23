import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
