import React, { useRef, useEffect } from 'react';
import {
  useQuery,
  gql
} from "@apollo/client"

import mapboxgl from '!mapbox-gl';

// const MAP_QUERY = gql`
//   query map {
//     mapboxApiKey
//     parks {
//       edges {
//         node {
//           latitude
//           longitude
//         }
//       }
//     }
//   }
// `

const MAP_QUERY = gql`
  query map {
    mapboxApiKey
  }
`
const Map = () => {
  const { loading, data } = useQuery(MAP_QUERY)

  if (loading) return <div>Loading</div>

  // const park = data.parks.edges[0].node
  // console.log('park', park)

  const mapContainer = useRef(null)
  const map = useRef(null)

  mapboxgl.accessToken = data.mapboxApiKey

  useEffect(() => {
  if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    })
  }, [])

  return (
    <div id='map' ref={mapContainer} style={{width: '600px', height: '400px'}}></div>
  )
}

export default Map
