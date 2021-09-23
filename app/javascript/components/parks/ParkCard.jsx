import React from 'react';
import { Link } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  containedSecondary: {
    color: theme.palette.common.white
  },
  bold: {
    fontWeight: 500
  }
}));

export default function ParkCard({park}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={park.fullName}
        subheader={park.states}
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
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { park.description }
        </Typography>
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
