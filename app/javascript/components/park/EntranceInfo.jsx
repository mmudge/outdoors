import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: '500'
  },
  bolder: {
    fontWeight: '600'
  }
}))

const EntranceInfo = ({title, entranceItem}) => {
  const classes = useStyles()
  return (
    <div>
      <Typography
        className={classes.bold}
        color='textSecondary'
        variant='body1'>
          { title }
      </Typography>
      {
        entranceItem.map((item) => {
          return (
            <Box key={item.title} pt={2}>
              {
                Object.keys(item).reverse().map((key, i) => {
                  return (
                    <Box key={key} pt={1}>
                      <Typography className={`${i === 0 ? classes.bolder : ''}`} color={i === 1 ? 'textSecondary' : 'textPrimary' } variant='body1'>
                        { i == 2 ? '$ ' + item[key] : item[key]}
                      </Typography>
                    </Box>
                  )
                })
              }
            </Box>
          )
        })
      }
    </div>
  )
}

export default EntranceInfo
