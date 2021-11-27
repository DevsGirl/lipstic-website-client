import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../bd-logo.png';
import './Header.css'
import useAuth from '../../hooks/useAuth';
 


const Header = () => {
   const {user, logOut} = useAuth();
    return (
        <Navbar className="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand  >
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="img-fluid logo"
                        />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link font" to="/">
                            <button className="btn font  w-100 txt-color fw-600">Home</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/about">
                            <button className="btn font w-100">About Us</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/categories">
                            <button className="btn font w-100 txt-color">Categories</button>
                        </NavLink>

                </Nav>
                <Nav className="ms-auto">
                     {user?.email ?
                     <div className="three-btn">
                            <NavLink className="nav-link" to="/dashboard">
                     <button className="btn font mt-1 w-100">Dashboard</button>
                 </NavLink>
                     {/* <NavLink className="nav-link" to="/myOrder">
                     <button className="btn font w-100">My Order</button>
                 </NavLink>

                 <NavLink className="nav-link" to="/allOrder">
                     <button className="btn font w-100"> All Orders</button>
                 </NavLink>

                 <NavLink className="nav-link" to="/addEvents">
                     <button className="btn font w-100"> Review</button>
                 </NavLink>

                 <NavLink className="nav-link" to="/pay">
                     <button className="btn font w-100"> Pay</button>
                 </NavLink> */}
                  <span className="me-3 font mt-3">
                            {user?.displayName}
                            </span>

                       <button  onClick={logOut} className="btn-logout font text-light py-2 my-2">Logout</button>
                       </div>:
                       <NavLink className="nav-link" to="/login">
                       <button to="/login"  className=" login-btn font px-4 w-100 fw-bold">Login</button>
                   </NavLink>}
                           
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;