import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  InputAdornment,
  TextField,
  Box,
  CircularProgress
 } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.only('md')]: {
      width: '80%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%'
    }
  }
}))

export default function ParksSearchbar({onChange, isLoading}) {
  const classes = useStyles()

  const handleChange = (event) => {
    onChange(event.target.value)
  };

  return (
    <TextField
      variant='outlined'
      type='text'
      classes={{
        root: classes.root,
      }}
      color='primary'
      label='Search National Parks'
      onChange={(e) => handleChange(e)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {
              isLoading && (
                <Box mr={2}>
                  <CircularProgress size={20} color='secondary' />
                </Box>
              )
            }
            <SearchIcon color='disabled'/>
          </InputAdornment>
        ),
      }}
    />
  );
}
