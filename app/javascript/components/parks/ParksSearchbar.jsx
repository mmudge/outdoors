import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

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

export default function ParksSearchbar({onChange}) {
  const classes = useStyles();

  const handleChange = (event) => {
    onChange(event.target.value)
  };

  const handleClick = (event) => {
    console.log('handle click', event)
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
            <IconButton
              aria-label="search national parks"
              onClick={handleClick}
              edge="end"
            >
              <SearchIcon/>
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
