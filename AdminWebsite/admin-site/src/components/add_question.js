import React from "react";
import ReactDOM from "react-dom";
import {Modal} from 'react-bootstrap';
import  "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Add_Question extends React.Component{
    
    constructor(props) {
        super(props);
    
        this.state = {
          modal: false,
          name: "",
          modalInputName: ""
        };
       
    };
   
    
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(e) {
        e.preventDefault();
        this.setState({ 
          question: this.state.modalInputName,
          u_id: this.state.modalInputUId
        });
        console.log(this.state)
        axios.post("http://localhost:4000/questionaire",this.state)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        this.modalClose();
      }
      modalOpen() {
        this.setState({ modal: true });
      }
    
      modalClose() {
        this.setState({
          modalInputName: "",
          modal: false
        });
      }
    

    render(){
        const mystyle = {
            paddingLeft:"200px",
            paddingTop:"100px",
            fontFamily: "Arial"
          };
        return(

            <div className="row" style={mystyle}>
                <h1>Add Question to the Feedback form</h1>
                <button href="javascript:;" onClick={e => this.modalOpen(e)}>
                ADD +
                </button>
          <Modal show={this.state.modal} handleClose={e => this.modalClose(e)} className="modal-lg" style={mystyle}>
          <h2>Hello Admin</h2>
          <div className="form-group col-md-12" >
          <label>Enter unit id:</label>
            <input
              type="text"
              value={this.state.modalInputUId}
              name="modalInputUId"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
            <br />
            <label>Enter a new Feedback Question:</label>
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button onClick={e => this.handleSubmit(e)} type="button">
              Save
            </button>
          </div>
        </Modal>

            </div>
        );
    }
        

}
export default Add_Question;
