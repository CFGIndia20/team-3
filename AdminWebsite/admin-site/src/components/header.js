import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
  
function Header(){
  
  return (
    <div>
                <div className="row">
                    <div className="col-md-12">
                      
                            <Navbar bg="dark" variant="dark" expand="xl" sticky="top">
                                <Navbar.Brand href="#home"></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/patients-list">Patients-List</Nav.Link>
                                    <Nav.Link href="/donors-list">Donors-List</Nav.Link>
                                    <Nav.Link href="/questionare">Feedback Questionare</Nav.Link>
                                    <Nav.Link href="/feedback">Patients Feedback</Nav.Link>                                  
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