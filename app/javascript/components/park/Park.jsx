import React from 'react'
import {
  useParams
} from "react-router-dom"
import {
  useQuery,
  gql
} from "@apollo/client"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../shared/PageWrapper'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CloudIcon from '@material-ui/icons/Cloud';
import DirectionsIcon from '@material-ui/icons/Directions';
import InfoIcon from '@material-ui/icons/Info';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
// import { useTheme, useMediaQuery } from '@material-ui/core';
import EntranceInfo from './EntranceInfo'

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
    }
  }
`

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
        <Box pt={5}>
          { children }
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  tab: {
    flexDirection: 'row !important',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0px !important'
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
  }
}))

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
        <Typography color='textSecondary' variant='body1' component='h6' align='center'>
          {park.states.split(',').join(' ')}
        </Typography>
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
        <EntranceInfo title='FEES' entranceItem={park.entranceFees} />
        <Box pt={5}>
          <EntranceInfo title='PASSES' entranceItem={park.entrancePasses} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography color='textPrimary' variant='body1'>{ park.weather }</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography color='textPrimary' variant='body1'>{ park.directions }</Typography>
      </TabPanel>
    </PageWrapper>
  )
}

export default Park
