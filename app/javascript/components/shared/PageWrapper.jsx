import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loading: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PageWrapper = (props) => {
  const classes = useStyles()
  return (
    <Container maxWidth="md">
      {props.loading ?
        <div className={classes.loading}>
          <LinearProgress color="secondary" />
        </div>
      : '' }
      <Box py={10}>
        { props.children }
      </Box>
    </Container>
  )
}

export default PageWrapper
