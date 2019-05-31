import React from 'react';
// imports in the different component pages to to routed out to our index.html
import HomePage from '../Home';
import Dashboard from '../Dash';
import Register from '../SignUp';
import Login from '../Login';
// imports components for using our material ui design components
import { MuiThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import  { CssBaseline , CircularProgress } from '@material-ui/core';
// imports components we need to proper route the different pages to the dom
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

// calls the material ui function that resolves to a default theme to be used on app
const theme = createMuiTheme();

// creat main app componet to be used with react
function App(props){
    return firebaseInitialized!==false?(
    // use multi theme component to apply generated theme througout our app
       <MuiThemeProvider theme={theme}>
          {/* use baseline component to give css functionality to individual components/pages in the app */}
           <CssBaseline/>
           {/* use main router component first to use subsequent functions */}
           <Router>
               {/* use switch function to handle different routing paths */}
               <Switch>
                   {/* define paths, adn where to route those paths when entered */}
                   <Route exact path='/' component={HomePage} />
                   <Route exact path='/register' component={Register} />
                   {/* may change the login to / root so it default */}
                   <Route exact path='/login' component={Login} />
                   <Route exact path='/dashboard' component={Dashboard} />
               </Switch>
           </Router>
       </MuiThemeProvider>
    ):<div id="loader"><CircularProgress/></div>
}

// export to be used and compiled from main index
export default App