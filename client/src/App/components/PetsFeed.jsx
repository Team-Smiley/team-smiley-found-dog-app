import React from 'react';
import Axios from 'axios';
import { Typography } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginTop: theme.spacing()
  },
  submit: {
    marginTop: theme.spacing(3)
  }
});


const PetsFeed = ({ pet, classes }) => (
  
  <div>
    <Typography component="h1">{pet.name}</Typography>
    <Typography component="h1">{pet.type}</Typography>
    <Typography component="h1">{pet.message}</Typography>
    <Typography component="h1">{pet.created_At}</Typography>
    <Typography component="h1">{pet.contact}</Typography>
    <a href={pet.image} target="blank">
      Lost Pet Pic
    </a>
  </div>
);

export default withStyles(styles)(PetsFeed);