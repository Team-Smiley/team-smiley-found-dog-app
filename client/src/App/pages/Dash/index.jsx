import React, { useEffect, useState } from 'react'
import { Typography, Paper, Avatar, CircularProgress, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
// import firebase from '../../firebaseConfig.js'
import { withRouter } from 'react-router-dom'
import Pets from '../../components/pets.jsx'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
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
                <Typography component="h1" variant="h5">
                    {/* Hello {firebase.getCurrentUsername()} */}
                    Hello User!
                </Typography>
                <Typography component="h1" variant="h5">
                    {/* Your Dog {fruit ? `"${fruit}"` : <CircularProgress size={20} />} */}
                    Your Dog: Pic <br />
                    Sited: 20
                </Typography>
                <Pets />
                {/* <Button type="submit" fullWidth variant="contained" color="secondary" onClick={logout} className={classes.submit}>
                    Logout
        </Button> */}
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