import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 64px)'
  },
  content: {
    height: '100%'
  },
  containedSecondary: {
    color: theme.palette.common.white
  }
}));

const Home = () => {
  const classes = useStyles();

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
