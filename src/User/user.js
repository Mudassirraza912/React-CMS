import React from 'react';
import PrimarySearchAppBar from '../Header/header'
import logo from '../assets/heart.png'
import placeholder from '../assets/placeholder.png'
import Button from '@material-ui/core/Button'
import './user.css';


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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



    render() {
        const { data } = this.state
        return (
            <div style={{flex: 1,backgroundColor: "#EFEFEF", width: '100%', height: '100%'}}>
                <PrimarySearchAppBar buttton={true} />

                <div style={{
                    display: "flex", width: '100%',
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: 'center',
                    paddingTop: 50,
                }}>

                    <div style={{ display: "flex", flexDirection: "row", width: '80%', flexWrap: 'wrap', justifyContent: 'space-evenly', alignContent: 'space-evenly' }}>
                        {data.map((value, index) => {
                            return (
                                <div style={{
                                    width: 250, backgroundColor: "#fff", display: 'flex',
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    marginTop: 30,
                                    borderRadius: 5
                                }}>
                                    <div style={{ marginTop: 10, width: '90%' }}>
                                        <img src={logo} style={{ height: 10, width: 10, marginTop: 10, float: 'right' }} />
                                    </div>



                                <div style={{marginbottom:15}}>
                                    <img
                                        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                        alt="Profile"
                                        style={{ height: "30%", width: "40%", borderRadius: 50 }}
                                    />
                                </div>

                                    <hr
                                        style={{
                                            color: 'red',
                                            backgroundColor: 'red',
                                            width: '80%',
                                            borderWidth: 0.2,
                                        }}
                                    />

                                    <div style={{width:"80%"}}>
                                        <p style={{ fontSize: 13, fontWeight: 'bold', marginBlockStart: 0, marginBlockEnd: 0 }}>{value.name}</p>
                                        <p style={{ fontSize: 10, color: '#bdbdbd', marginBlockStart: 0, marginBlockEnd: 0 }}>{value.trip}</p>
                                    </div>

                                    <div style={{ marginTop: 5, display: 'flex', flexDirection: "row" }}>
                                        <img src={placeholder} style={{ height: 10, width: 10, marginRight: 5 }} />
                                        <p style={{ fontSize: 10, color: '#bdbdbd', marginBlockStart: 0, marginBlockEnd: 0 }}>{value.loaction}</p>
                                    </div>


                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Button style={{ backgroundColor: null, color: "#000", width: '100%' }}>
                                            <p style={{ fontSize: 10, fontWeight: 'bold' }}>View Trips</p>
                                        </Button>
                                    </div>


                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        );
    }
}

export default User;
