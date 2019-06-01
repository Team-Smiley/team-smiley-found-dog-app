import React from 'react';
import { Typography, Paper, Avatar, Button} from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

// add basic styling wanted
const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', 
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
        backgroundColor: theme.palette.primary.main,
    },
    submit: {
        marginTop: theme.spacing(3),
    },
})

// create component function Home, for HomePage, so it can be used with react hooks
function Home(props){
    const { classes } = props

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VerifiedUserOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Welcome Back to Found Dog!
                </Typography>
                {/* add button for lost dogs map */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    // add link to dash
                    component={Link}
                    to="/lostdogs"
                    className={classes.submit}>
                    LOST DOGS!
                </Button>
                {/* add button for signing in */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    // add route to login
                    component={Link}
                    to="/signin"
                    className={classes.submit}>
                    Sign-In
                </Button>
                {/* add button for signing up */}
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    // add route to signup
                    component={Link}
                    to="/signup"
                    className={classes.submit}>
                    Sign-Up
                </Button>
                {/* add button for dashboard */}
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    // add link to dash
                    component={Link}
                    to="/dash"
                    className={classes.submit}>
                    Dashboard
                </Button>
            </Paper>
        </main>
    )

}

// export to be routed in main App 
// add style exporting by calling withStyles
export default withStyles(styles)(Home)