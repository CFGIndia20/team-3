// import React from "react";
// import { Table } from 'semantic-ui-react'

// const Donors = () => {
//     return(
//         <Table striped>
//             <Table.Header>
//                 <Table.Row>
//                     <Table.HeaderCell>Id</Table.HeaderCell>
//                     <Table.HeaderCell>Unit Id</Table.HeaderCell>
//                     <Table.HeaderCell>Name</Table.HeaderCell>
//                     <Table.HeaderCell>Phone Number</Table.HeaderCell>
//                     <Table.HeaderCell>Email Id</Table.HeaderCell>
//                 </Table.Row>
//             </Table.Header>

//             <Table.Body>
//                 <Table.Row>
//                     <Table.Cell>101</Table.Cell>
//                     <Table.Cell>M1U1</Table.Cell>
//                     <Table.Cell>Donor 1</Table.Cell>
//                     <Table.Cell>8574857485</Table.Cell>
//                     <Table.Cell>donor1@gmail.com</Table.Cell>
//                 </Table.Row>
//             </Table.Body>
//         </Table>
//     );
// };

import React, { Component } from 'react';

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

    return (
      <div className="App" style={{paddingTop:"50px"}}>
        <h1>List of Donors</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item.name} | {item.phone} |   {item.email}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}
export default Donors;