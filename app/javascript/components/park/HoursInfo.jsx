import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { capitalize } from '../../utils.js'

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: '500'
  },
  bolder: {
    fontWeight: '600'
  }
}))

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const hoursInfo = ({hours}) => {
  const classes = useStyles()

  return hours.map((item, idx) => {
    return (
      <Box key={item.name} pb={idx === hours.length - 1 ? 0 : 3}>
        <Typography
          className={classes.bolder}
          color='textPrimary'
          variant='h6'>
            { item.name }
        </Typography>
        <Box pt={1}>
          <Typography
            color='textSecondary'
            variant='body1'>
              { item.description }
          </Typography>
        </Box>
        <Box pt={2}>
          <Typography
            color='textPrimary'
            variant='body1'
            className={classes.bold}
          >
            Standard Hours
          </Typography>
          <Box pt={1}>
            {
              Object.keys(item.standardHours).map((key, i) => {
                return (
                  <Typography
                    key={key}
                    color='textSecondary'
                    variant='body1'>
                      { capitalize(days[i]) } - { item.standardHours[days[i]] }
                  </Typography>
                )
              })
            }
          </Box>
        </Box>
        <Box pt={1}>
        {
          item.exceptions.map((exception) => {
            return (
              <Box key={exception.name} pt={2}>
                <Typography
                  color='textPrimary'
                  variant='body1'
                  className={classes.bold}
                >
                  { exception.name }
                </Typography>
                <Box pt={1}>
                  {
                    Object.keys(exception.exceptionHours).map((key, i) => {
                      return (
                        <Typography
                          key={key}
                          color='textSecondary'
                          variant='body1'>
                            { capitalize(days[i]) } - { exception.exceptionHours[days[i]] }
                        </Typography>
                      )
                    })
                  }
                </Box>
              </Box>
            )
          })
        }
        </Box>
      </Box>
    )
  })
}

export default hoursInfo
