import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client"
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Typography,
  Button
 } from '@material-ui/core';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from "react-router-dom"

const BG_PHOTOS_QUERY = gql`
  query bgPhotos {
    backgroundPhotos {
      id
      url
      xlarge
      large
      landscape
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    // width: '100%',
    // maxHeight: '100vh',
    // position: 'relative'
  },
  wrapper: {
    position: 'relative',
    marginTop: '64px'
  },
  content: {
    height: '100%'
  },
  containedSecondary: {
    color: theme.palette.common.white
  },
  backgroundPhoto: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    // height: '100%'
  }
}))

const Home = () => {
  const classes = useStyles()
  const { loading, data } = useQuery(BG_PHOTOS_QUERY)

  if (loading) return <div></div>

  console.log('data', data)

  return (
    <div className={classes.wrapper}>
      {
        !loading && data ? <img src={data.backgroundPhotos[4].landscape} className={classes.backgroundPhoto} /> : ''
      }
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
    </div>
  );
}

export default Home
