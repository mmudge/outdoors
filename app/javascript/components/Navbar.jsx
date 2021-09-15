import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  titleIcon: {
    marginRight: theme.spacing(2),
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const navItems = [
    { text: 'Home', to: '/', icon: <HomeIcon /> },
    { text: 'National Parks', to: '/national_parks', icon: <ExploreSharpIcon /> },
  ]
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.titleContent}>
          <ExploreSharpIcon fontSize='large' className={classes.titleIcon} />
          <Typography variant="h5">
            Outdoors
          </Typography>
        </div>

        {
          navItems.map((item) => {
            return (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.to}
                startIcon={item.icon}
              >
                {item.text}
              </Button>
            )
          })
        }
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
