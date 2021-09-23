import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Typography,
  Button
 } from '@material-ui/core';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  content: {
    height: '100%'
  },
  containedSecondary: {
    color: theme.palette.common.white
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="md">
      <Box className={classes.content} display='flex' justifyContent='center' alignItems='center'>
        <Box className={classes.content} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Box pb={5}>
            <Typography variant='h1' color='textPrimary' align='center'>Road Trip!</Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            classes={{
              containedSecondary: classes.containedSecondary
            }}
            size="large"
            className={classes.button}
            endIcon={<ArrowRightAltIcon />}
            component={Link}
            to='/national_parks'
          >
            find your park
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home
