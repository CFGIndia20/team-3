import React from "react";
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
                 <Table.Row key={list.d_id}> 
                     <Table.Cell>{list.d_id}</Table.Cell>
                     <Table.Cell>{list.u_id}</Table.Cell>
                     <Table.Cell>{list.name}</Table.Cell>
                     <Table.Cell>{list.phone}</Table.Cell>
                     <Table.Cell>{list.email}</Table.Cell>
                 </Table.Row>
             </Table.Body>
         </Table>
     );
};
}
export default Donors;