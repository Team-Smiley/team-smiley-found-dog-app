import React, { useEffect, useState } from 'react'
import { Typography, Paper, Avatar, CircularProgress, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
// import firebase from '../../firebaseConfig.js'
import { withRouter, Link } from 'react-router-dom'
import Pets from '../../components/pets.jsx'
import Geolocation from '../../components/Geolocation.jsx'



const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    avatar: {
        margin: theme.spacing(),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        marginTop: theme.spacing(3),
    },
})

function Dash(props) {
    const { classes } = props

    // if (!firebase.getCurrentUsername()) {
    //     // not logged in
    //     alert('Please login first')
    //     props.history.replace('/login')
    //     return null
    // }
    //

    const [fruit, setFruit] = useState('')

    // useEffect(() => {
    //     //getting firestore data
    //     firebase.getCurrentUserFruit().then(setFruit)
    // })

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VerifiedUserOutlined />
                </Avatar>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    // add link to dash
                    component={Link}
                    to="/lostpets"
                    className={classes.submit}>
                    LOST PETS!
                </Button>
                <Typography component="h1" variant="h5">
                    {/* Hello {firebase.getCurrentUsername()} */}
                    Welcome Back!
                </Typography>
                <Typography component="h1" variant="h5">
                    {/* Your Dog {fruit ? `"${fruit}"` : <CircularProgress size={20} />} */}
                    Lost Pet? 
                </Typography>
                <Pets />
                {/* <Button type="submit" fullWidth variant="contained" color="secondary" onClick={logout} className={classes.submit}>
                    Logout
        </Button> */}
                {/* <Geolocation />*/}
            </Paper>
            
        </main>

    )


    // async function logout() {
    //     await firebase.logout()
    //     //use for routing
    //     props.history.push('/')
    //     //
    //     //
    // }
}

export default withRouter(withStyles(styles)(Dash))