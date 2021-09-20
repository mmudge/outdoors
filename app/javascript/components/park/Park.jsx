import React from 'react'
import {
  useParams
} from "react-router-dom"
import {
  useQuery,
  gql
} from "@apollo/client"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../shared/PageWrapper'

const PARK_QUERY = gql`
  query park($id: ID!) {
    park(id: $id) {
      id
      fullName
      name
      description
      states
      imagesData
    }
  }
`

const Park = () => {
  const { id } = useParams()
  const { loading, error, data, refetch } = useQuery(PARK_QUERY, {
    variables: { id }
  })

  if (loading) return <div></div>

  console.log('data', data)

  const park = data.park

  return (
    <PageWrapper loading={loading}>
      <Box pb={10}>
        <Typography variant='h2' component='h1' align='center'>
          {park.fullName}
        </Typography>
      </Box>
    </PageWrapper>
  )
}

export default Park
