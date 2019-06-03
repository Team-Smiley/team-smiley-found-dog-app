import React from 'react';
import Axios from 'axios';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";
// require('dotenv').config;
// import cloudinary from 'cloudinary';
import PetsList from './PetsList.jsx';
import Comments from './Comments.jsx';

const styles = theme => ({
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

// widget is stored in state, clicking button will call function to display widget
class Pets extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            type: '',
            message: '',
            image: '',
            contact: '',
            pets: [],
            widget: window.cloudinary.createUploadWidget({
        cloud_name: `duubp6wjp`,
        // imageUrl: 'https://api.cloudinary.com/v1_1/dyucbqgew/image/upload'
        uploadPreset: `wwcugh6n` },
        (err, result) => {this.checkUploadResult(result)}
      )
        }
        // binding of all the functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showWidget = this.showWidget.bind(this);
        this.checkUploadResult = this.checkUploadResult.bind(this);
        this.getPets = this.getPets.bind(this);
    }

    // grabs information from forms by name and value entered, sets state
    handleChange() {
        const { name, value } = event.target;
        const state = {};
        state[name] = value;
        this.setState(state);
    }

    // Submits information in forms and picture to database
    handleSubmit(event) {
      const { name, type, message, image, contact } = this.state;
      event.preventDefault();
        // post request to db with info
        Axios.post('/user', {
          name: name,
          type: type,
          message: message,
          contact: contact,
          image: image,
        }).then(response => console.log(response))
        .catch(err => console.error(err));
      }
    
      // allows widget to be displayed
    showWidget(e) {
      this.state.widget.open()
    }

    // when image is loaded to cloudinary, grab url to save into database
    checkUploadResult(resultEvent) {
      if (resultEvent.event === 'success') {
        console.log(resultEvent);
        this.setState({
          image: resultEvent.info.secure_url
        })
      }
    }

    // gets all pets from database to show on page
    getPets() {
      Axios.get('/user')
        .then(pets => {
          console.log(pets);
          let allPets = [];
          pets.data.forEach(pet => allPets.push(pet));
          this.setState({
            pets: allPets,
          })
        })
        .catch(err => console.error(err));
    }

    render() {
      const { classes } = this.props;

      const { pets } = this.state;
        return (
          <div>
            <Button
              type="submit"
              fullWidth
              variant="text"
              color="primary"
              onClick={this.showWidget}
              className={classes.submit}
            >
              Upload Pet Pic
            </Button>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Pet Name</InputLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="off"
                  autoFocus
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Input
                  id="email"
                  type="text"
                  name="type"
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="message">Message</InputLabel>
                <Input
                  name="message"
                  type="text"
                  id="password"
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="contact">Contact Info</InputLabel>
                <Input
                  name="contact"
                  type="text"
                  id="contact"
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
                className={classes.submit}
              >
                Submit Pet!
              </Button>
              <PetsList pets={pets} />
              {/* <Comments /> */}
            </form>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={this.getPets}
              className={classes.submit}
            >
              Lost List
            </Button>
          </div>
        );
    }
}

export default withStyles(styles)(Pets);