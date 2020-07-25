import React from "react";
import { Table } from 'semantic-ui-react'

const Donors = () => {
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
                <Table.Row>
                    <Table.Cell>101</Table.Cell>
                    <Table.Cell>M1U1</Table.Cell>
                    <Table.Cell>Donor 1</Table.Cell>
                    <Table.Cell>8574857485</Table.Cell>
                    <Table.Cell>donor1@gmail.com</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default Donors;