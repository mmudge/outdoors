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
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const PARK_QUERY = gql`
  query park($id: ID!) {
    park(id: $id) {
      id
      fullName
      name
      description
      states
      imagesData
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    flexDirection: 'row !important',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: '0px !important'
  },
  icon: {
    marginBottom: '0px !important'
  }
});

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

  const park = data.park

  return (
    <PageWrapper loading={loading}>
      <Box pb={10}>
        <Typography variant='h2' component='h1' align='center'>
          {park.fullName}
        </Typography>
      </Box>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab
            icon={<PhoneIcon className={classes.icon} />}
            label="INFO"
            classes={{
              wrapper: classes.tab,
              labelIcon: classes.icon
            }}
             />
          <Tab
            icon={<FavoriteIcon classes={{root: classes.icon}}  />}
            label="FAVORITES"
            classes={{
              wrapper: classes.tab,
              labelIcon: classes.icon
            }}
          />
          <Tab
            icon={<PersonPinIcon classes={{root: classes.icon}} />}
            label="WEATHER"
            classes={{
              wrapper: classes.tab,
              labelIcon: classes.icon
            }}
            />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item One
      </TabPanel>

    </PageWrapper>
  )
}

export default Park
