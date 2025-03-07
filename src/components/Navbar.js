import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const routes = {
    'Route-A | Vijay Nagar to Niranjanpur': ['Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur'],
    'Route-B | Niranjanpur to Rajiv Gandhi Square': [
      'Niranjanpur', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Vijay Nagar', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'G.P.O', 'Indra Pratima',
      'Navlakha Square', 'Holkar Subway', 'Bhavarkua Square', 'Vishnu Puri', 'Mata Gujari', 'Rajiv Gandhi Square',
    ],
    'Route-C | Rajiv Gandhi Square to Silicon City': [
      'Rajiv Gandhi Square', 'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar',
      'Durga Nagar', 'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City',
    ],
    'Route-D | Rajiv Gandhi Square to Rau Bypass': [
      'Rajiv Gandhi Square', 'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar',
      'Durga Nagar', 'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump',
      'Rau Bus Stop', 'Mamaji Ka Dhaba', 'Rau Bypass',
    ],
    'Route-E | Rajiv Gandhi Square to Mahu Railway Station': [
      'Rajiv Gandhi Square', 'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar',
      'Durga Nagar', 'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump',
      'Rau Bus Stop', 'Mamaji Ka Dhaba', 'Rau Bypass', 'Hardiyas Hospital', 'Alpa Labour', 'Medicaps Company', 'Pigdambar',
      'Peethampur Bypass', 'Keshav Park', 'Umariya Gaon', 'A.D Bansal College of Technology', 'IIT Indore', 'EC Hospital',
      'Kishanganj', 'Indra Colony', 'Hari Phatak', 'Mahu Railway Station',
    ],
    'Route-F | Vijay Nagar to Rajiv Gandhi Square': [
      'Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'G.P.O', 'Indra Pratima',
      'Navlakha Square', 'Holkar Subway', 'Bhavarkua Square', 'Vishnu Puri', 'Mata Gujari', 'Rajiv Gandhi Square'
    ],
    'Route-G | Vijay Nagar to Silicon City': [
      'Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City'
    ],
    'Route-H | Vijay Nagar to Rau Bypass': [
      'Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump', 'Rau Bus Stop',
      'Mamaji Ka Dhaba', 'Rau Bypass'
    ],
    'Route-I | Vijay Nagar to Mahu Railway Station': [
      'Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump', 'Rau Bus Stop',
      'Mamaji Ka Dhaba', 'Rau Bypass', 'Hardiyas Hospital', 'Alpa Labour', 'Medicaps Company', 'Pigdambar',
      'Peethampur Bypass', 'Keshav Park', 'Umariya Gaon', 'A.D Bansal College of Technology', 'IIT Indore', 'EC Hospital',
      'Kishanganj', 'Indra Colony', 'Hari Phatak', 'Mahu Railway Station'
    ],
    'Route-J | Niranjanpur to Silicon City': [
      'Niranjanpur', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Vijay Nagar', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City'
    ],
    'Route-K | Niranjanpur to Rau Bypass': [
      'Niranjanpur', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Vijay Nagar', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump', 'Rau Bus Stop',
      'Mamaji Ka Dhaba', 'Rau Bypass'
    ],
    'Route-L | Niranjanpur to Mahu Railway Station': [
      'Niranjanpur', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Vijay Nagar', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump', 'Rau Bus Stop',
      'Mamaji Ka Dhaba', 'Rau Bypass', 'Hardiyas Hospital', 'Alpa Labour', 'Medicaps Company', 'Pigdambar',
      'Peethampur Bypass', 'Keshav Park', 'Umariya Gaon', 'A.D Bansal College of Technology', 'IIT Indore', 'EC Hospital',
      'Kishanganj', 'Indra Colony', 'Hari Phatak', 'Mahu Railway Station'
    ]  
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" color="success">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          className="icon-button"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h3" className="navbar-typography" style={{ flexGrow: 1 }}>
          iBus E-Ticket
        </Typography>

        <div className="nav-links">
          <Link to="/home" className="nav-link">
            <Button color="inherit" className="nav-button">Home</Button>
          </Link>
          <Link to="/book-ticket" className="nav-link">
            <Button color="inherit" className="nav-button">Book Ticket</Button>
          </Link>
          <Link to="/about" className="nav-link">
            <Button color="inherit" className="nav-button">About</Button>
          </Link>
          <Link to="/contact" className="nav-link">
            <Button color="inherit" className="nav-button">Contact</Button>
          </Link>
        </div>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="account"
          onClick={handleMenuOpen}
          className="icon-button"
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>
            {/* Updated link to /login-register */}
            <Link to="/login-register" className="menu-link">LOGIN/REGISTER</Link>
          </MenuItem>
        </Menu>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <div style={{ width: 250 }}>
          <Typography variant="h6" style={{ padding: '16px' }}>
            iBus E-Ticket
          </Typography>
          <Divider />
          <Link to="/home" className="drawer-link">
            <Button fullWidth onClick={() => toggleDrawer(false)}>Home</Button>
          </Link>
          <Link to="/book-ticket" className="drawer-link">
            <Button fullWidth onClick={() => toggleDrawer(false)}>Book Ticket</Button>
          </Link>
          <Link to="/about" className="drawer-link">
            <Button fullWidth onClick={() => toggleDrawer(false)}>About</Button>
          </Link>
          <Link to="/contact" className="drawer-link">
            <Button fullWidth onClick={() => toggleDrawer(false)}>Contact</Button>
          </Link>
          <Divider />
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Routes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Object.keys(routes).map((route) => (
                <div key={route}>
                  <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginTop: '10px' }}>
                    {route}
                  </Typography>
                  <ul>
                    {routes[route].map((stop) => (
                      <li key={stop}>{stop}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
