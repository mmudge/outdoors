import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client"
import Grid from '@material-ui/core/Grid';
import ParkCard from './ParkCard'
import ParksHeader from './ParksHeader'
import Box from '@material-ui/core/Box';
import PageWrapper from '../shared/PageWrapper'

const PARKS_QUERY = gql`
  query parks($query: String) {
    parks(query: $query) {
      edges {
        node {
          id
          fullName
          name
          description
          states
          imagesData
        }
      }
    }
  }
`

const Parks = () => {
  const { loading, error, data, refetch } = useQuery(PARKS_QUERY)

  const handleSearchChange = (value) => {
    refetch({ query: value })
  }

  let parks = []

  if (!loading && data) {
    parks = data.parks.edges.map((e) => e.node)
  }

  return (
    <PageWrapper loading={loading}>
      <Box pb={10}>
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
    </PageWrapper>
  )
}

export default Parks
