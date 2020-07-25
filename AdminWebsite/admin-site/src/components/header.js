import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
  
function Header(){
    if (window.location.pathname === '/') return null;

  return (
    <div>
                <div className="row" style={{fontSize:"25px"}}>
                    <div className="col-md-12">
                      
                            <Navbar bg="dark" variant="dark" expand="xl" sticky="top" style={{position:"fixed" ,width:"100%" }}>

                                <Navbar.Brand href="#home">
                                    <img
                                        src={require("../images/logo.png")}
                                        width="200"
                                        height="50"
                                        className="d-inline-block align-top"
                                        alt="St. Jude India ChildCare Centres"
                                    />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" >
                                    <Nav.Link href="/app" style={{paddingRight:"30px"}}>Home</Nav.Link>
                                    <Nav.Link href="/patients-list" activeClassName="active" style={{paddingRight:"30px"}}>Patients-List</Nav.Link>
                                    <Nav.Link href="/donors-list" style={{paddingRight:"30px"}}>Donors-List</Nav.Link>
                                    <Nav.Link href="/questionare" style={{paddingRight:"30px"}}>Feedback Questionare</Nav.Link>
                                    <Nav.Link href="/feedback" style={{paddingRight:"30px"}}>Patients Feedback</Nav.Link>  
                                    <Nav.Link href="/" style={{paddingLeft:"90px"}}>LOGOUT</Nav.Link>                                 
                                
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                           
                    </div>
                </div>
            </div>
  );
  }

export default Header;