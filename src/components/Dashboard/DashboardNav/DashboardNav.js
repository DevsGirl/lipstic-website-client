import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import logo from './../../../bd-logo.png';
import useAuth from '../../../hooks/useAuth';
import './DashboardNav.css'
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrder from '../Admin/ManageAllOrder/ManageAllOrder';
import MyOrders from '../User/MyOrders/MyOrders';
import AddProduct from '../Admin/AddProduct/AddProduct';
import Pay from '../User/Pay/Pay';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import UserReview from '../User/UserReview/UserReview';

 


const DashboardNav = () => {
   const {user, logOut, admin} = useAuth();
   let { url} = useRouteMatch();
    return (
        <>
        <Navbar className="nav-bg" expand="lg" sticky="top">
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
{!admin ?
                    <Nav className="me-auto">
                        <NavLink className="nav-link font" to={`${url}`}>
                            <button className="btn font  w-100 txt-color fw-600">Dashboard</button>
                        </NavLink>

                        <NavLink className="nav-link" to={`${url}/myOrders`}>
                            <button className="btn font w-100">My Order</button>
                        </NavLink>

                        <NavLink className="nav-link" to={`${url}/review`}>
                            <button className="btn font w-100 txt-color">Review</button>
                        </NavLink>

                        <NavLink className="nav-link" to={`${url}/pay`}>
                            <button className="btn font w-100 txt-color">Pay</button>
                        </NavLink>
</Nav> :
                        <Nav className="me-auto">
                        <NavLink className="nav-link" to={`${url}/makeAdmin`}>
                            <button className="btn font w-100 txt-color">Make Admin</button>
                        </NavLink>
                        <NavLink className="nav-link" to={`${url}/addProduct`}>
                            <button className="btn font w-100 txt-color">Add Product</button>
                        </NavLink>
                        <NavLink className="nav-link" to={`${url}/manageAllOrders`}>
                            <button className="btn font w-100 txt-color">Manage All Orders</button>
                        </NavLink>
                        <NavLink className="nav-link" to={`${url}/manageProducts`}>
                            <button className="btn font w-100 txt-color">Manage Products</button>
                        </NavLink>
                        
                </Nav>}
                <Nav className="ms-auto">
                     {user?.email ?
                     <div className="three-btn">
                  
                  
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
        <Switch>
            <Route exact path={`${url}`}>
                <DashboardHome></DashboardHome>
           </Route>
           {admin && 
           <>
            <AdminRoute exact path={`${url}/manageAllOrders`}>
                <ManageAllOrder></ManageAllOrder>
                </AdminRoute>
            <AdminRoute exact path={`${url}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
           </AdminRoute>
            <AdminRoute exact path={`${url}/addProduct`}>
            <AddProduct></AddProduct>
           </AdminRoute>
            <AdminRoute exact path={`${url}/manageProducts`}>
                <ManageProducts></ManageProducts>
           </AdminRoute>
           </>
             }
            <Route exact path={`${url}/myOrders`}>
                <MyOrders></MyOrders>
           </Route>
             <Route exact path={`${url}/review`}>
                <UserReview></UserReview>
           </Route> 
            <Route exact path={`${url}/pay`}>
                <Pay></Pay>
           </Route>
        </Switch>
        </>
    );
};

export default DashboardNav;