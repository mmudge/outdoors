import React from 'react'
import {
  useParams
} from "react-router-dom"

const Park = () => {
  const { id } = useParams()

  return (<h1>PARK PAGE</h1>)
}

export default Park
