/* eslint-disable no-undef */
/* global google */
import React from 'react';
import PrimarySearchAppBar from '../Header/header'
import logo from '../assets/heart.png'
import placeholder from '../assets/placeholder.png'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: '',
            long: '',
            data: [
                {
                    name: "Carrie",
                    trip: "5 Trips plan this years",
                    loaction: "Current location London"
                },
                {
                    name: "Carrie",
                    trip: "5 Trips plan this years",
                    loaction: "Current location London"
                },
                {
                    name: "Carrie",
                    trip: "5 Trips plan this years",
                    loaction: "Current location London"
                },
                {
                    name: "Carrie",
                    trip: "5 Trips plan this years",
                    loaction: "Current location London"
                },
                {
                    name: "Carrie",
                    trip: "5 Trips plan this years",
                    loaction: "Current location London"
                },
                {
                    name: "Carrie",
                    trip: "5 Trips plan this years",
                    loaction: "Current location London"
                },



            ]
        }

    }


    componentDidMount() {
        let location = null;
        let latitude = null;
        let longitude = null;
        if (window.navigator && window.navigator.geolocation) {
            location = window.navigator.geolocation
        }
        if (location) {
            location.getCurrentPosition(function (position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                console.log('latitude', position.coords);
                console.log('longitude', longitude);
            })
        }
    }




    onLoad = (marker) => {
        console.log('marker: ', marker)
    }



    render() {
        const { data } = this.state
        return (
            <div style={{ flex: 1, backgroundColor: "#EFEFEF", width: '100%', height: '100%' }}>
                <PrimarySearchAppBar buttton={false} />

                <div style={{
                    display: "flex", width: '100%',
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: 'center',
                    paddingTop: 25,
                }}>



                    <div style={{ display: "flex", flexDirection: 'row', width: '100%', justifyContent: "space-evenly", flexWrap: 'wrap' }}>

                        <div style={{ width: 550, marginBottom: 20 }}>

                            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", width: '100%' }}>

                                <div style={{ width: '47%' }}>
                                    <Button variant="contained" style={{ backgroundColor: "#fff", color: "#0391FF", width: '100%', height: 50 }}>
                                        <p style={{ color: '#0391FF', marginBlockStart: 0, marginBlockEnd: 0 }}>Travellers</p>
                                    </Button>
                                </div>

                                <div style={{ width: '47%' }}>
                                    <Button variant="contained" style={{ backgroundColor: "#fff", color: "#0391FF", width: '100%', height: 50 }}>
                                        <p style={{ color: '#000', marginBlockStart: 0, marginBlockEnd: 0 }}>Destination</p>
                                    </Button>
                                </div>
                            </div>


                            <List style={{ backgroundColor: '#fff', marginTop: 10 }}>
                                {this.state.data.map((value, key) => {
                                    return (
                                        <ListItem key={key} style={{ borderBottomWidth: 1, borderBottomColor: '#EFEFEF' }}>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt="placeholder"
                                                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={value.name}
                                                secondary={
                                                    <React.Fragment>
                                                        {value.trip}
                                                        <div style={{ marginTop: 5, display: 'flex', flexDirection: "row" }}>
                                                            <img src={placeholder} style={{ height: 10, width: 10, marginRight: 5 }} />
                                                            <p style={{ fontSize: 10, color: '#bdbdbd', marginBlockStart: 0, marginBlockEnd: 0 }}>{value.loaction}</p>
                                                        </div>
                                                    </React.Fragment>
                                                }
                                            />
                                            <ListItemSecondaryAction style={{ width: '20%' }}>
                                                <div style={{ marginTop: 5, display: 'flex', flexDirection: "row", width: '100%', justifyContent: "space-between" }}>
                                                    <p style={{ color: '#000', marginBlockStart: 0, marginBlockEnd: 0, marginBottom: 10, cursor: "pointer" }}>View trip</p>
                                                    <img src={logo} style={{ height: 20, width: 20, marginRight: 5, marginBlockStart: 0, marginBlockEnd: 0 }} />

                                                </div>
                                            </ListItemSecondaryAction>
                                            <Divider />
                                        </ListItem>

                                    );
                                })}
                            </List>




                        </div>

                        <div style={{ width: 700 }}>
                            <LoadScript
                                onError={(error) => console.log("error error", error)}
                                id="script-loader"
                                googleMapsApiKey="AIzaSyCoXJkZJwmDy3KBHE-KlYovubNRXmJzJcE"
                            >
                                {/* <GoogleMap
                        mapContainerStyle={{ height: "100vh", width: "80%"}}
                        defaultZoom={12}
                        // defaultCenter={{ lat: -34.397, lng: 150.644 }}
                        region={{
                            latitude: 24.8897536,
                            longitude: 67.0646272,
                            longitudeDelta:0.1,
                            latitudeDelta:0.1}}
                        id='example-map' /> */}

                                <GoogleMap
                                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                                    defaultZoom={23}
                                    id="circle-example"
                                    mapContainerStyle={{
                                        height: "100vh", width: "100%"
                                    }}
                                    zoom={23}
                                    center={{
                                        lat: 24.8897123,
                                        lng:
                                         67.0646123
                                    }}
                                >
                                    <Marker
                                    
                                    icon={{ url: "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png",
                                    scaledSize: { width: 50, height: 50}}}

                                    // shape="MarkerShapeCircle"
                                        onLoad={this.onLoad}
                                        position={{
                                            lat: 24.8897123,
                                            lng:
                                             67.0646123
                                        }}
                                    />

<Marker
                                    
                                    icon={{ url: "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-black-7-512.png",
                                    scaledSize: { width: 50, height: 50}, style:{borderRadius: 50}}}

                                    // shape="MarkerShapeCircle"
                                        onLoad={this.onLoad}
                                        position={{
                                            lat: 24.8897345,
                                            lng:
                                             67.0646345
                                        }}
                                    />



<Marker
                                    
                                    icon={{ url: "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-black-7-512.png",
                                    scaledSize: { width: 50, height: 50}}}

                                    // shape="MarkerShapeCircle"
                                        onLoad={this.onLoad}
                                        position={{
                                            lat: 24.8897456,
                                            lng:
                                             67.0646456
                                        }}
                                    />
                                       
                                </GoogleMap>
                            </LoadScript>
                        </div>

                    </div>



                </div>
            </div>
        );
    }
}

export default User;
