import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ParkCard from './ParkCard'
import ParksHeader from './ParksHeader'
import Box from '@material-ui/core/Box';

import {
  useQuery,
  gql
} from "@apollo/client"

const PARKS_QUERY = gql`
  query parksQuery {
    parks {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Parks = () => {
  const { loading, error, data } = useQuery(PARKS_QUERY)

  if (data) {
    console.log('parks data', data)
  }

  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box py={10}>
        <ParksHeader />
      </Box>
      <Grid container justifyContent='center' spacing={3}>
        {
          [0,1,2,3,4,5,6,7,8,9].map((item) => {
            return (
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <ParkCard />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}

export default Parks
