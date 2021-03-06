import React, { Component } from 'react';
import { Button, AppBar, Toolbar, IconButton, Typography, TextField } from '@material-ui/core'
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import history from '../router/history'
import firebase from '../config/firebase'
import MenuIcon from '@material-ui/icons/Menu'
import swal from 'sweetalert'
import Media from 'react-media';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            name: "",
            password:""
        }
    }

    handleClick = () => {
      
        history.push('/login')
    }


    signup = () => {
        const {name, email, password} = this.state
        console.log(name, email, password)

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((success) => {
        success.user.updateProfile({
          displayName: name
        })
        console.log('SignUp Successfully', success)
        var StudObj = {
          email: email,
          pass: password,
          student: name,
          uid: success.user.uid,
        }
        if (success) {
          firebase.database().ref('/' + success.user.uid + '/').push(StudObj)
         
          swal({
            title: "SIGN UP!",
            text: "Sign Up Successfull !",
            icon: "success",
          });
          history.push('/login')
        }
        else {
          console.log('unsucces')
        }
      })
      .catch((error) => {
        // console.log(error)
        swal({

          title: "LOG IN",
          text: error.code,
          icon: "error",
        });

      })

  
    }

    render() {
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <AppBar style={{ backgroundColor: "transparent" }} position="static">
                    <Toolbar>
                        <Typography onClick={() => { history.push('/')}} style={{ color: "#000" }} variant="h6">
                            Website Builder
          </Typography>
                        <div style={{ flex: 1, position: "relative", marginLeft: "50%" }}>
                            <Button onClick={this.handleClick} style={{ marginLeft: "5%" }}>Login</Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <header className="App-header" style={{ backgroundImage: "url('https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/cms-vergleich-t.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>



                    {/* <div style={{ flex: 1, marginTop: "10%", width: "70%", justifyContent: "center", display: "flex" }}>

                      



                    </div> */}


                    <Media  queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"
            }}>
              {matches => (
                <div>
                  {matches.small ?


     <div style={{ flex: 1, marginTop: "10%", width: "100%", justifyContent: "center", display: "flex" }}>

<div style={{ width: "100%", height: 400 , backgroundColor: "#fff", borderRadius: 10, opacity: 0.7 }}>

<div>
    <text style={{ fontSize: 35 }}>Sign Up</text>
</div>


<TextField
    id="outlined-password-input"
    label="User Name"
    type="name"
    margin="normal"
    variant="outlined"
    onChange = {(e) => {console.log("eeeeeee", e.target.value)}}
/>

<div>
<TextField
id="outlined-password-input"
label="Email"
type="Email"
margin="normal"
variant="outlined"
onChange = {(e) => {this.setState({email: e.target.value})}}
/>

</div>


<div>

<TextField
id="outlined-password-input"
label="Password"
type="password"
autoComplete="current-password"
margin="normal"
variant="outlined"
onChange = {(e) => {this.setState({password: e.target.value})}}

/>

</div>

<div>
<Button variant="contained" color="primary" onClick={this.signup} style={{ marginLeft: "5%" }}>Sign Up</Button>
</div>
</div>

</div>

                    :

                    <div style={{ flex: 1, marginTop: "10%", justifyContent: "center", display: "flex" }}>

<div style={{ width:500, height: 400 , backgroundColor: "#fff", borderRadius: 10, opacity: 0.7 }}>

<div>
    <text style={{ fontSize: 35 }}>Sign Up</text>
</div>


<TextField
    id="outlined-password-input"
    label="User Name"
    type="name"
    margin="normal"
    variant="outlined"
    onChange = {(e) => {console.log("eeeeeee", e.target.value)}}
/>

<div>
<TextField
id="outlined-password-input"
label="Email"
type="Email"
margin="normal"
variant="outlined"
onChange = {(e) => {this.setState({email: e.target.value})}}
/>

</div>


<div>

<TextField
id="outlined-password-input"
label="Password"
type="password"
autoComplete="current-password"
margin="normal"
variant="outlined"
onChange = {(e) => {this.setState({password: e.target.value})}}

/>

</div>

<div>
<Button variant="contained" color="primary" onClick={this.signup} style={{ marginLeft: "5%" }}>Sign Up</Button>
</div>
</div>
</div>
                  }

                </div>
              )}
            </Media>


                </header>
            </div>
        );
    }
}

export default Signup;

