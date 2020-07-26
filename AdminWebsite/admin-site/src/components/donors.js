import React,{Component} from "react";
import { Table } from 'semantic-ui-react'

class Donors extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }
    // Fetch the list on first mount
    componentDidMount() {
      this.getList();
    }
    // Retrieves the list of items from the Express app
    getList = () => {
      fetch('http://localhost:4000/doners/')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }

  render() {
    const { list } = this.state;
     return(
         <Table striped>
             <Table.Header>
                 <Table.Row>
                     <Table.HeaderCell>Id</Table.HeaderCell>
                     <Table.HeaderCell>Unit Id</Table.HeaderCell>
                     <Table.HeaderCell>Name</Table.HeaderCell>
                     <Table.HeaderCell>Phone Number</Table.HeaderCell>
                     <Table.HeaderCell>Email Id</Table.HeaderCell>
                 </Table.Row>
             </Table.Header>
             <Table.Body>
            {list.map((item) => (
                 <Table.Row key={item.d_id}> 
                     <Table.Cell>{item.d_id}</Table.Cell>
                     <Table.Cell>{item.u_id}</Table.Cell>
                     <Table.Cell>{item.name}</Table.Cell>
                     <Table.Cell>{item.phone}</Table.Cell>
                     <Table.Cell>{item.email}</Table.Cell>
                 </Table.Row>
            ))}
            </Table.Body>
            </Table>
            );
          }

}
export default Donors;