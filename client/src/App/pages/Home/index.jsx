import React from 'react';
import { Typography, Paper, Avatar, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'

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
export default Home 