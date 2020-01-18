import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  grow: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    paddingRight: 10,
    paddingLeft: 10,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#EFEFEF",
    '&:hover': {
      backgroundColor: "#EFEFEF",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: 50 ,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const currencies = [
    {
      value: 'USD',
      label: 'Age',
    },
    {
      value: 'EUR',
      label: 'Country',
    },
    {
      value: 'BTC',
      label: 'Distance',
    },
   
  ];

export default function PrimarySearchAppBar(props) {
  // console.log("props.button", props.buttton)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [country, setCurrency] = React.useState('EUR');
  const [Age, setAge] = React.useState('USD');
  const [distance, setDistance] = React.useState('BTC');
  const handleChangeAge = event => {
    setAge(event.target.value);
  };

  const handleChangeDist = event => {
    setDistance(event.target.value);
  };

  const handleChange = event => {
    setCurrency(event.target.value);
  };
 

 var distanc = "distance"
  
  console.log("country", country)
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit" elevation={0} style={props.buttton ? {width:'80%'} : {width:'100%'}}>
        <Toolbar>

        <div style={{padding: 10, width:'10%'}}>
        <Select
          style={{backgroundColor:'#EFEFEF', width: "100%" }}
          disableUnderline
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </div>

        {/* <TextField
          style={{paddingRight:10, paddignLeft:10}}
          id="standard-select-currency"
          select
          value={country}
          onChange={handleChange}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}

<div style={{padding: 10, width:'10%'}}>
        <Select
          style={{backgroundColor:'#EFEFEF', width: "100%"}}
          disableUnderline
          defaultValue="Ten"
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          value={Age}
          onChange={handleChangeAge}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>

        {/* <TextField
            style={{paddingRight:10, paddignLeft:10, borderBottom: null}}
        //    disableUnderline
          id="standard-select-currency"
          select
          value={Age}
          onChange={handleChangeAge}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}

        </TextField> */}
<div style={{padding: 10, width:'10%'}}>
        <Select
          style={{backgroundColor:'#EFEFEF', width: "100%"}}
          disableUnderline
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={distance}
          onChange={handleChangeDist}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
</div>

        {/* <TextField
        style={{paddingRight:10, paddignLeft:10}}
          id="standard-select-currency"
          select
          value={distance}
          onChange={handleChangeDist}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: "#BDBDBD" }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
          <div className={classes.grow} />

          {props.buttton && <div >
          <Button variant="contained" style={{ backgroundColor: "#0391FF", color: "#EFEFEF", width:'100%' }}>
          <p style={{ fontSize: 9, color: '#efefef'  ,marginBlockStart: 0, marginBlockEnd: 0 }}>Show Map</p>
            </Button>
          </div>}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </div>
  );
}