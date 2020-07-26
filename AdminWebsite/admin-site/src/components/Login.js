import React, { Component } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Route, BrowserRouter as Router, Switch,Link,Redirect } from 'react-router-dom';
import App from '../App.js';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Header, Image} from "semantic-ui-react";


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
        window.location.replace("http://localhost:3000/app");
       }
        
      
    render() {

        const mystyle = {
            //paddingLeft:"550px  ",
            //paddingTop:"100px",
            fontFamily: "Arial",
            textAlign:"center",


          };

          

        return (
            <div>
            <Header as="h2">
                <Image src={require("../images/logo.png")} />
            </Header>
            <div style={{textAlign:"center", marginTop:"50px"}}>
                <form style={mystyle} >
                    <h3>Admin Login</h3>
                    <br/>
    
                    <div className="form-group" style={{textAlign:"left"}}>
                        <label >User Name</label>
                        <input type="text" className="form-control" placeholder="Enter username"
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