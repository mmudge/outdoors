import React, { useEffect, useRef, useState } from 'react';
import {
  useQuery,
  gql
} from "@apollo/client"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ParkCard from './ParkCard'
import ParksHeader from './ParksHeader'
import Box from '@material-ui/core/Box';
import PageWrapper from '../shared/PageWrapper'
import Button from '@material-ui/core/Button';

const PARKS_QUERY = gql`
  query parks($query: String, $first: Int, $cursor: String) {
    parks(query: $query, first: $first, after: $cursor) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
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

const useStyles = makeStyles((theme) => ({
  containedSecondary: {
    color: theme.palette.common.white
  }
}))

const Parks = () => {
  const classes = useStyles()

  const { loading, error, data, refetch, fetchMore } = useQuery(PARKS_QUERY, {
    variables: {
      first: 9
    },
    notifyOnNetworkStatusChange: true,
  })

  const observerRef = useRef(null)
  const [buttonRef, setButtonRef] = useState(null)

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    }
    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        entry.target.click()
      }
    }, options)
  }, [])

  useEffect(() => {
    if (buttonRef) {
      observerRef.current.observe(document.querySelector("#loadMoreButton"));
    }
  }, [buttonRef])

  const handleSearchChange = (value) => {
    refetch({ query: value })
  }

  const handleClick = () => {
    if (!(data || data.parks.pageInfo.hasNextPage)) return

    fetchMore({
      variables: {
        cursor: data.parks.pageInfo.endCursor,
      },
    })
  }

  let parks = []
  let hasNextPage = false

  if (data) {
    parks = data.parks.edges.map((e) => e.node)
    hasNextPage = data.parks.pageInfo.hasNextPage
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

      {
        hasNextPage && (
          <Box mt={5} display='flex' justifyContent='center'>
            <Button
              id='loadMoreButton'
              ref={setButtonRef}
              size='small'
              variant="contained"
              color="secondary"
              classes={{
                containedSecondary: classes.containedSecondary
              }}
              onClick={() => handleClick()}
              disabled={loading}
            >
              Load More
            </Button>
          </Box>
        )
      }

    </PageWrapper>
  )
}

export default Parks
