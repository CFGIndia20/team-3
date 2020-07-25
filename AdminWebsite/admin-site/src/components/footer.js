import React from "react";
import { Navbar,Nav,Form,FormControl,Button,NavbarBrand } from 'react-bootstrap'
const hStyle = { color: 'white' };

function Footer() {
  return(
    <div className="fixed-bottom">  
        <Navbar bg="dark" >
           
               <h3 style={hStyle}>Footer</h3>
            
        </Navbar>
    </div>
  )

}

export default Footer;