import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ParkCard from './ParkCard'
import ParksHeader from './ParksHeader'
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

const PARKS_QUERY = gql`
  query parks($query: String) {
    parks(query: $query) {
      edges {
        node {
          id
          name
          fullName
          description
          states
          addresses
          phones
          imagesData
        }
      }
    }
  }
`

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

const Parks = () => {
  const classes = useStyles()
  const { loading, error, data, refetch } = useQuery(PARKS_QUERY)

  // if (loading) {
  //   return (
  //     <div className={classes.loading}>
  //       <LinearProgress color="secondary" />
  //     </div>
  //   )
  // }

  const handleSearchChange = (value) => {
    refetch({ query: value })
  }

  let parks = []

  if (!loading && data) {
    parks = data.parks.edges.map((e) => e.node)
  }

  // const parks = data.parks.edges.map((e) => e.node)

  return (
    <Container maxWidth="md">
      {loading ?
        <div className={classes.loading}>
          <LinearProgress color="secondary" />
        </div>
      : '' }
      <Box py={10}>
        <ParksHeader onSearchChange={(value) => handleSearchChange(value)} />
      </Box>
      <Grid container justifyContent='center' spacing={3}>
        {
          parks.map((park) => {
            return (
              <Grid key={park.id} item xs={12} md={6} lg={4} xl={3}>
                <ParkCard park={park} />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}

export default Parks
