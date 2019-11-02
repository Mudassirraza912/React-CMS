import React, { Component } from 'react';
import { Button, AppBar, Toolbar, IconButton, Typography, TextField, Card, CardActions, CardContent, useMediaQuery} from '@material-ui/core'
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
const width = window.innerWidth;
const height = window.innerHeight;



class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }


  componentWillMount() {   firebase.auth().onAuthStateChanged((user) => {
            console.log("USER USER USER", user)
    });
  }


  logout() {
      firebase.auth().signOut()
      .then((success) => {
          console.log(success)
      })
      .catch((err) => {
        console.log(err)
    })
  }

  handleClick = () => {

    history.push('/signup')
  }

  render() {
    return (
      <div style={{flex: 1}}>
        <AppBar style={{ backgroundColor: "transparent" }} position="static">
          <Toolbar>
            <Typography onClick={() => { history.push('/') }} style={{ color: "#000" }} variant="h6">
              Website Builder
          </Typography>
          <div style={{height:"100%", width:"75%"}}>
          <Media   queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"
            }}>
              {matches => (
                <div>
                  {matches.small ?

                        <div>
                            </div>

                    :

                    <div style={{ flex: 1, position: "relative",display:"flex", flexDirection:"row", marginLeft:"100%", alignContent:"flex-end" }}>
<div style={{width:200, flex: 1, height:100}}>
<Button onClick={this.logout}>logot</Button>
</div>


<div style={{width:200, flex: 1}}>
  <Button onClick={this.handleClick} style={{ marginLeft: "5%", width:"20%"}}><text style={{fontSize:25, fontWeight:"bold", marginRight:5}}>+</text>  Create Page</Button>
</div>

</div>




                  }

                </div>
              )}
            </Media>
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

