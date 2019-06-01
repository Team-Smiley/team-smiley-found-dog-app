import React from 'react';
import { Typography, Paper, Avatar, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'

// add basic styling wanted
const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', 
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
        backgroundColor: theme.palette.primary.main,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
})

// create component function Home, for HomePage, so it can be used with react hooks
function Home(props){
    return(
        <div>
        <Comments />
        HomePage Component
        </div>
    )
}

// export to be routed in main App 
// add style exporting by calling withStyles
export default withStyles(styles)(HomePage)