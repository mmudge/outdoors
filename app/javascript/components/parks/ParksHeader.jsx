import React from 'react';
import Box from '@material-ui/core/Box';
import ParksSearchBar from './ParksSearchbar'
import Typography from '@material-ui/core/Typography';
import { useTheme, useMediaQuery } from '@material-ui/core';

const ParksHeader = ({onSearchChange, isLoading}) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box textAlign='center'>
      <Typography variant={mobile ? 'h3' : 'h2'} color='textPrimary'>Find Your Park</Typography>
      <Box pt={5}>
        <ParksSearchBar
          onChange={(value) => onSearchChange(value)}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  )
}

export default ParksHeader
