import React from 'react';
import './App.css';
import Routes from '../src/router/routes'
// import PrimarySearchAppBar from '../src/Header/header'
import User from '../src/User/user'
import UserMap from '../src/User/userMapping.js'

class App extends React.Component {

 

render() {
  return (
    <div className="App">
      <Routes />
      {/* <UserMap /> */}
      {/* <User /> */}
    </div>
  );
}
}

export default App;
