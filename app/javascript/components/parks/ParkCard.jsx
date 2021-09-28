import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Collapse,
  CardActionArea,
  Chip,
  Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  containedSecondary: {
    color: theme.palette.common.white
  },
  bold: {
    fontWeight: 500
  },
  content: {
    cursor: 'pointer',
    '&:hover': {
       cursor: 'pointer',
    },
    backgroundColor: 'inherit',
    '&:hover': {
       backgroundColor: theme.palette.grey[50],
    }
  }
}))

const States = ({states}) => {
  if (states.includes(',')) {
    states = states.split(',')
  } else {
    states = [states]
  }

  return (
    <Box display='flex' flexWrap='wrap' alignItems='baseline'>
      {
        states.map((state) => <Chip key={state} variant="outlined" size="small" color='primary' label={state} />)
      }
    </Box>
  )
}

export default function ParkCard({park}) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/national_parks/${park.id}`}>
        <CardHeader
          // title={park.fullName.length > 25 ? park.name : park.fullName}
          title={park.fullName}
          subheader={park.states ? <States states={park.states} /> : ''}
          titleTypographyProps={{
            variant: 'subtitle1',
            color: 'textPrimary',
          }}
          classes={{
            title: classes.bold
          }}
        />
        <CardMedia
          className={classes.media}
          image={park.imagesData[0].url}
          title={park.imagesData[0].title}
        />
      </CardActionArea>
      <CardContent className={classes.content} onClick={() => handleExpandClick()}>
        <Collapse in={expanded} timeout="auto" collapsedSize='100px'>
        <Typography variant="body2" color="textSecondary" component="p">
          { park.description }
        </Typography>
        </Collapse>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          color="secondary"
          variant="contained"
          size='small'
          disableElevation
          fullWidth={true}
          component={Link}
          to={`/national_parks/${park.id}`}
          classes={{
            containedSecondary: classes.containedSecondary
          }}
        >More Details</Button>
      </CardActions>
    </Card>
  );
}
