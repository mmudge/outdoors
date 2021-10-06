import React, { useState } from 'react';
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
import Map from '../Map';

const BG_PHOTOS_QUERY = gql`
  query bgPhotos {
    mapboxApiKey
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
    position: 'relative'
  },
  content: {
    height: 'calc(100vh - 64px)'
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold
  },
  containedSecondary: {
    color: theme.palette.common.white
  },
  backgroundPhoto: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    top: '64px',
    left: 0,
    width: '100%',
    height: 'auto',
    position: 'fixed'
  }
}))

const Home = () => {
  const [counter, setCounter] = useState(0)
  const classes = useStyles()
  const { loading, data } = useQuery(BG_PHOTOS_QUERY)

  if (loading) return <div></div>

  let bgSrc = data.backgroundPhotos[counter].landscape

  setTimeout(() => {
    if (counter === data.backgroundPhotos.length - 1) {
      setCounter(0)
    } else {
      setCounter(counter + 1)
    }
  }, 8000);

  return (
    <div>
      <Map />
      {/* {
        !loading && data ? <img src={bgSrc} className={classes.backgroundPhoto} /> : ''
      } */}

      <Container className={classes.root} maxWidth="md">

        <Box className={classes.content} display='flex' justifyContent='center' alignItems='center'>
          <Box className={classes.content} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box pb={5}>
              <Typography variant='h1' className={classes.title} align='center'>Adventure</Typography>
              <Typography variant='h3' className={classes.title} align='center'>Explore. Discover.</Typography>
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
