import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box pt={10} display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h1' color='textPrimary' align='center'>Road Trip!</Typography>
      </Box>
    </Container>
  );
}

export default Home
