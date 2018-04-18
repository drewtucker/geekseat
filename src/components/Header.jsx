import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import logo from '../assets/img/sgLogo2.png';
import searchLogo from '../assets/img/search.png';
function Header(){

var ImageStyles = {
  height: '26',
  width: '128',
  position: 'inline',
}

var h1Styles = {
  marginTop: '100',
  marginBottom: '20',
  fontSize: '50px'
}

var headerStyles = {
  fontFamily: 'helvetica',
  background: 'linear-gradient(135deg, #1673e6 50%, #01a1e7)',
  color: '#ecf3f7',
  height: '375px',
  textAlign: 'center'
}

var NavbarStyles = {
  fontFamily: 'helvetica',
  background: 'linear-gradient(135deg, #1673e6 50%, #01a1e7)',
  color: 'white',
  borderStyle: 'none',
  width: '100%',
}

var searchStyles = {
  width: '650',
  height: '60px',
  borderRadius: '12px',
  position: 'inline',
  marginLeft: '5%',
  marginRight: '0',
  paddingTop: '13px',
}

var buttonStyles = {
  backgroundColor: '#1673e6',
  borderColor: '#1673e6',
  borderRadius: '8px',
  float: 'right'
}

var centerStyling = {
  textAlign: 'center'
}

var SearchBackground = {
  backgroundColor: 'white',
  borderRadius: '10px',
  width: '964',
  marginLeft: '15%',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,.15)'

}

var SearchLogoStyles = {
  float: 'left',
  height: '30px',
  width: '30px',
  marginTop: '15px',
  marginLeft: '15px'

}

var InputStyles = {
  position: 'inline-block',
  borderColor: 'white',
  boxShadow: '0 0 0 0 white',
  fontSize: '1.25em',
  margin: '0'
}

  return(
    <div>
      <div className='container-fluid' style={headerStyles}>
      <Navbar style={NavbarStyles}>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} style={ImageStyles}></img><p></p>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown title="Sports">
            <MenuItem>MLB</MenuItem>
            <MenuItem>MLS</MenuItem>
            <MenuItem>NBA</MenuItem>
            <MenuItem>NFL</MenuItem>
            <MenuItem>NHL</MenuItem>
            <MenuItem>Fighting</MenuItem>
          </NavDropdown>
          <NavDropdown title="Music">
            <MenuItem>Beyonce</MenuItem>
            <MenuItem>Bon Jovi</MenuItem>
            <MenuItem>Ed Sheeran</MenuItem>
            <MenuItem>Foo Fighters</MenuItem>
            <MenuItem>Jay Z</MenuItem>
            <MenuItem>Taylor Swift</MenuItem>
          </NavDropdown>
          <NavDropdown title="More">
            <MenuItem>Cities</MenuItem>
            <MenuItem>Comedy</MenuItem>
            <MenuItem>Horse Racing</MenuItem>
            <MenuItem>Theatre</MenuItem>
            <MenuItem>WWE</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavItem>
            Sell
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem>
            Track My Order
          </NavItem>
          <NavItem>
            Sign Up
          </NavItem>
          <NavItem>
            Log In
          </NavItem>
        </Nav>
      </Navbar>
        <h1 style={h1Styles}>Millions of tickets in one place.</h1>
        <div style={searchBar}>
          <img src={searchLogo} style={SearchLogoStyles}></img>
          <div action="/search" className="search-form" style={searchStyles}>
            <input style={InputStyles} type="text" className="form-control" placeholder="Search by team, artist, event, or venue"></input>
          </div>
          <button style={buttonStyles}>Search</button>
        </div>
      </div>
      <div className="container-fluid" style={centerStyling}>
        <button className="btn btn-secondary">Seattle, WA </button>
          <button className="btn btn-secondary">Any Date</button>

        <hr/>
      </div>
    </div>
  );
}
const searchBar = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 10fr",
  backgroundColor: 'white',
  borderRadius: '10px',
  width: '964',
  marginLeft: '15%',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,.15)',
}



export default Header;
