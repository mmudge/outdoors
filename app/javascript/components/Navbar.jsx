import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
  useMediaQuery
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';


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
  },
  selected: {
    color: theme.palette.secondary.main,
    '&$selected': {
      color: theme.palette.secondary.main,
    }
  }
}))

const MobileNav = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <AppBar position='fixed' className={classes.mobile}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        color='seconadry'
      >
        {
          navItems.map((item) => {
            return (
              <BottomNavigationAction
                key={item.text}
                classes={{
                  selected: classes.selected
                }}
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
    <AppBar position='fixed' color='primary'>
      <Toolbar>
        <div className={classes.titleContent}>
          <Button
            color="inherit"
            size='large'
            component={Link}
            to='/'
          >
            <Typography variant="h5">
              Road Trip
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
