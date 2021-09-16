import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const handleChange = (event) => {
    console.log('handle click', event)
  };

  const handleClick = (event) => {
    console.log('handle click', event)
  };

  return (
    <OutlinedInput
      type='text'
      placeholder='Search National Parks'
      color='secondary'
      onChange={handleChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="search national parks"
            onClick={handleClick}
            edge="end"
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
