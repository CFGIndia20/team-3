import React, { Component } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Route, BrowserRouter as Router, Switch,Link,Redirect } from 'react-router-dom';
import App from '../App.js';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)

        this.state = {
         email:"",
         password:""
        };
       
    };
    submit = () => {
        alert(this);
       }
        
      
    render() {

        const mystyle = {
            paddingLeft:"550px  ",
            paddingTop:"100px",
            fontFamily: "Arial",
            textAlign:"center",


          };

          

        return (
            <div className="row" style={{ backgroundColor:"blue"
        }}>
            <div >
                <form style={mystyle} >
                    <h3>Admin Login</h3>
                    <br/>
    
                    <div className="form-group" style={{textAlign:"left"}}>
                        <label >Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                        value={this.state.email} onChange={this.onEmailChange.bind(this)}
                        />
                    </div>
    
                    <div className="form-group" style={{textAlign:"left"}}>
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                        value={this.state.password} onChange={this.onPasswordChange.bind(this)}
                        />
                    </div>
    
                   
                   <Button value="Enter password" onClick={this.submit}>Submit</Button>
                  
                </form>
                </div>
             </div>
            );
    
           
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
    onPasswordChange(event) {
        this.setState({password: event.target.value})
      }

     
}
export default Login;