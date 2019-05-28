//require react
import React from 'react'
//require react dom
import ReactDOM from 'react-dom'
//create class app component
class App extends React.Component {
  //constructor
   constructor(props) {
       super(props);
   }
   //render html
   render() {
       return (
           <div>Hello Found Dog</div>
       )
   }
}
//render app component
ReactDOM.render(<App />, document.getElementById('app'));