import React, { Component } from 'react';
import { Button, AppBar, Toolbar, IconButton, Typography, TextField, } from '@material-ui/core'
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import history from '../router/history'
import MenuIcon from '@material-ui/icons/Menu'
import firebase from '../config/firebase'
import swal from 'sweetalert'
import Media from 'react-media';

var user = firebase.auth().currentUser;

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }


  handleClick = () => {

    history.push('/signup')
  }

  render() {
      console.log("USER USER USER", user)
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <AppBar style={{ backgroundColor: "transparent" }} position="static">
          <Toolbar>
            <Typography onClick={() => { history.push('/') }} style={{ color: "#000" }} variant="h6">
              Website Builder
          </Typography>
            <div style={{ flex: 1, position: "relative", marginLeft: "50%" }}>
              <Button onClick={this.handleClick} style={{ marginLeft: "5%"}}><text style={{fontSize:25, fontWeight:"bold", marginRight:5}}>+</text>  Create Page</Button>
            </div>
          </Toolbar>
        </AppBar>
        <header className="App-header" style={{ backgroundImage: "url('https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/cms-vergleich-t.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>




        </header>
      </div>
    );
  }
}

export default Dashboard;

