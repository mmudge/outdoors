import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="np-avatar" className={classes.avatar}>
        //     NP
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
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
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color='primary'
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{ park.description }</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
