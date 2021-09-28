import React from 'react'
import { useParams } from "react-router-dom"
import {
  useQuery,
  gql
} from "@apollo/client"
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  ImageList,
  ImageListItem,
 } from '@material-ui/core'

import CloudIcon from '@material-ui/icons/Cloud'
import DirectionsIcon from '@material-ui/icons/Directions'
import InfoIcon from '@material-ui/icons/Info'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

// import { useTheme, useMediaQuery } from '@material-ui/core';
import PageWrapper from '../shared/PageWrapper'
import EntranceInfo from './EntranceInfo'
import HoursInfo from './HoursInfo'

const PARK_QUERY = gql`
  query park($id: ID!) {
    park(id: $id) {
      id
      fullName
      name
      states
      description
      weather
      directions
      imagesData
      entranceFees
      entrancePasses
      addresses
      hours
    }
  }
`

const useStyles = makeStyles((theme) => ({
  tab: {
    flexDirection: 'row !important',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0px !important',
  },
  icon: {
    marginBottom: '0px !important',
    paddingRight: '18px',
  },
  labelIcon: {
    minHeight: '0 !important',
    paddingTop: '12px'
  },
  imagesRoot: {
    display: 'flex',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  textSecondary: theme.palette.text.secondary
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`a11y-tabpanel-${index}`}
      aria-labelledby={`a11y-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={3}>
          <Paper elevation={0} variant='outlined'>
            <Box p={3}>
              { children }
            </Box>
          </Paper>
        </Box>
      )}
    </div>
  );
}

const Park = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { id } = useParams()
  const { loading, error, data, refetch } = useQuery(PARK_QUERY, {
    variables: { id }
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) return <div></div>

  const tabs = [
    { label: 'INFO', icon: <InfoIcon className={classes.icon} />},
    { label: 'HOURS', icon: <AccessTimeIcon className={classes.icon} />},
    { label: 'FEES & PASSES', icon: <AttachMoneyIcon className={classes.icon} />},
    { label: 'WEATHER', icon: <CloudIcon classes={{root: classes.icon}} />},
    { label: 'DIRECTIONS', icon: <DirectionsIcon classes={{root: classes.icon}} />},
  ]

  const park = data.park

  return (
    <PageWrapper loading={loading}>
      <Box pb={8}>
        <Typography color='textPrimary' variant='h2' component='h1' align='center'>
          {park.fullName}
        </Typography>
        <Box pt={2} display='flex' justifyContent='center'>
          <Box pr={1}>
            <LocationOnIcon fontSize='small' color='disabled' />
          </Box>
          <div>
              { park.addresses.filter((a) => a.type === 'Physical').map((a) => {
                return (
                  <Typography key={a.line1} color='textSecondary' variant='body2' component='h6' align='center'>
                    {`${a.line1}, ${a.city}, ${a.stateCode} ${a.postalCode}`}
                  </Typography>
                )
              })}
            </div>
          </Box>
      </Box>
      <Box pb={6} className={classes.imagesRoot}>
        <ImageList rowHeight={246} cols={3}>
          {park.imagesData.slice(0, 3).map((item) => (
            <ImageListItem
             key={item.url}
             cols={1}
             >
              <img src={item.url} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Paper elevation={0} variant='outlined'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
          centered
        >
          {
            tabs.map((tab) => {
              return (
                <Tab
                  key={tab.label}
                  icon={tab.icon}
                  label={tab.label}
                  classes={{
                    wrapper: classes.tab,
                    labelIcon: classes.labelIcon
                  }}
                  />
              )
            })
          }
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Typography color='textPrimary' variant='body1'>{ park.description }</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HoursInfo hours={park.hours} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EntranceInfo title='FEES' entranceItem={park.entranceFees} />
        {
          park.entrancePasses.length ?
            <Box pt={5}>
              <EntranceInfo title='PASSES' entranceItem={park.entrancePasses} />
            </Box>
            :
            ''
        }
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography color='textPrimary' variant='body1'>{ park.weather }</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography color='textPrimary' variant='body1'>{ park.directions }</Typography>
      </TabPanel>
    </PageWrapper>
  )
}

export default Park
