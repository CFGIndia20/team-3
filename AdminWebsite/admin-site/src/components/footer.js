import React from "react";
import { Navbar,Nav,Form,FormControl,Button,NavbarBrand } from 'react-bootstrap'
const hStyle = { color: 'white' };

function Footer() {
  if (window.location.pathname === '/') return null;

  return(
    <div className="fixed-bottom">  
        <Navbar bg="dark" >
           
               <h3 style={hStyle}>St. Jude India ChildCare Centres</h3>
            
        </Navbar>
    </div>
  )

}

export default Footer;