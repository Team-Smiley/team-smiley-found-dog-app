// import React from 'react'
// import { Typography, Paper } from '@material-ui/core'
// import withStyles from '@material-ui/core/styles/withStyles'
// import LostMap from '../../components/LostMap.jsx'
// import Comments from '../../components/Comments.jsx'

// // import firebase from '../../firebaseConfig.js'

// const styles = theme => ({
//   main: {
//     width: 'auto',
//     display: 'block', // Fix IE 11 issue.
//     marginLeft: theme.spacing(3),
//     marginRight: theme.spacing(3),
//     [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
//       width: 500,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
//   },
//   avatar: {
//     margin: theme.spacing(),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   submit: {
//     marginTop: theme.spacing(3),
//   },
// })

// function LostPets(props) {
//   const { classes } = props

//   return (
//     <div>
//       <main className={classes.main}>
//         <Paper className={classes.paper}>
//           <Typography component="h1" variant="h5">
//             MAPPY
//           </Typography>
//         </Paper>
//         <div><LostMap /></div>
//       </main>
//       <div>
//           <Comments></Comments>
//       </div>
//     </div>
//   )
// }

// export default withStyles(styles)(LostPets)