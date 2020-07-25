import React, { Component } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";


class Login extends Component {
    render() {
        const mystyle = {
            paddingLeft:"550px",
            paddingTop:"100px",
            fontFamily: "Arial"
          };
        return (
            <div className="row">
            <div >
                <form style={mystyle}>
                    <h3>Sign In</h3>
    
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
    
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
    
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
                </div>
             </div>
            );
    
    }
}
export default Login;