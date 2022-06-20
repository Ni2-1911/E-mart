import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect } from "react";

function Navbar_(props) {

  const { loggedIn } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg" style={{position: "fixed",width: "100%",top:'0px',zIndex: 100}} >
      <Container fluid>
        <Navbar.Brand href="#" style={{display: "flex",fontWeight: "bold"}} className="mx-3" >
        <ion-icon name="bag-handle-sharp"
        style={{color: 'white',backgroundColor:'#20BEAD',padding:"7px",borderRadius:"5px",marginRight:'3px'}}></ion-icon>
        E-MART
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" style={{textDecoration:"none",color:'gray'}}>
           HOME
           </Link>
           {loggedIn === true && (
            <>
             <Link to="/Profile" className="mx-3" style={{textDecoration:"none",color:'gray'}}>
           PROFILE
           </Link>
            </>
          )}
          
          </Nav>
         
          <Link to="/WishList">
          <button
            type="button"
            style={{ backgroundColor: "#fb0066", color: "white" }}
            class="btn position-relative mx-2"
            
          >
            <ion-icon name="heart-sharp"></ion-icon>{" "}
          </button>
          </Link>

         <Link to="/Cart">
          <button
            type="button"
            style={{ backgroundColor: "#20BEAD", color: "white",marginRight:'1rem' }}
            class="btn position-relative"
            
          >
            <ion-icon name="cart-outline" style={{ color: "white" }}></ion-icon>{" "}
            CART
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.badgeValue}
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
          </Link>

          {loggedIn === true && (
            <>
              <LogOutBtn />
            </>
          )}
          {loggedIn === false && (
            <>
              <Link to="/login">
              <Button variant="outline" className="mx-2" style={{color:"#20BEAD",borderColor:'#20BEAD'}}>LOG IN</Button>
              </Link>
              <Link to="/register">
              <Button variant="outline" style={{color:"#20BEAD",borderColor:'#20BEAD'}}>REGISTOR</Button>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_;
