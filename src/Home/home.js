import React from 'react';
import '../App.css';
import logo from '../assets/cms.jpg';
import { Button, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu'
import history from '../router/history'
// var matches = useMediaQuery('(min-width:600px)');

class Home extends React.Component {

  handleClick() {
    history.push('/login')
  }

  historySignUp() {
    history.push('/signup')
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <AppBar style={{ backgroundColor: "transparent" }} position="static">
          <Toolbar>
            <Typography onClick={() => { history.push('/')}} style={{color:"#000"}} variant="h6">
              Website Builder
          </Typography>
            <div style={{ flex: 1, position: "relative", marginLeft: "50%",display:"flex", flexDirection:"row" }}>
              {/* <Button   onClick={this.handleClick}>Login</Button> */}
              <Button  onClick={this.historySignUp} style={{ marginLeft: "5%" }}>Get Started</Button>
            </div>
          </Toolbar>
        </AppBar>
        <header className="App-header" style={{ backgroundImage: "url('https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/cms-vergleich-t.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>



          <div style={{flex: 1, marginTop:"20%", width:"50%"}}>

          <div>
            <text style={{ fontSize: 50, color: "#fff" }}>Create a website in minutes.</text>
          </div>

          <div>
            <text style={{ color: "#fff" }}>We Will gives you everything you need to start your website today.
Free hosting, your own domain, a world-class support team, and so much more.</text>
          </div>
          </div>


        </header>
      </div>
    );
  }
}

export default Home;
