import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useTheme, useMediaQuery } from '@material-ui/core';

const navItems = [
  { text: 'Home', to: '/', icon: <HomeIcon />, mobileOnly: true },
  { text: 'National Parks', to: '/national_parks', icon: <ExploreSharpIcon />, mobileOnly: false },
]

const useStyles = makeStyles((theme) => ({
  mobile: {
    top: 'auto',
    bottom: 0,
  },
  titleContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  titleIcon: {
    marginRight: theme.spacing(2),
  }
}))

const MobileNav = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <AppBar position='fixed' className={classes.root}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        {
          navItems.map((item) => {
            return (
              <BottomNavigationAction
                key={item.text}
                label={item.text}
                icon={item.icon}
                component={Link}
                to={item.to}
              />
            )
          })
        }
      </BottomNavigation>
    </AppBar>
  );
}

const Nav = () => {
  const classes = useStyles()
  const items = navItems.filter((item) => !item.mobileOnly)
  return (
    <AppBar position="static" color='primary'>
      <Toolbar>
        <div className={classes.titleContent}>
          <Button
            color="inherit"
            size='large'
            component={Link}
            to='/'
          >
            <Typography variant="h5">
              Outdoors
            </Typography>
          </Button>
        </div>

        {
          items.map((item) => {
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

const Navbar = () => {
  const theme = useTheme()
  const showMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return showMobile ? <MobileNav /> : <Nav />
}

export default Navbar
