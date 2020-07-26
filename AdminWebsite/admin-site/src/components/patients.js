import React from "react";
import { Table } from 'semantic-ui-react'

const Patients = () => {
    return(
        <Table striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Unit</Table.HeaderCell>
                    <Table.HeaderCell>Space Id</Table.HeaderCell>
                    <Table.HeaderCell>Admission Date</Table.HeaderCell>
                    <Table.HeaderCell>Discharge Date</Table.HeaderCell>
                    <Table.HeaderCell>Admission Status</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                    <Table.HeaderCell>Center</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>104</Table.Cell>
                    <Table.Cell>Aman</Table.Cell>
                    <Table.Cell>M1U2</Table.Cell>
                    <Table.Cell>125</Table.Cell>
                    <Table.Cell>15/02/2020</Table.Cell>
                    <Table.Cell>01/03/2020</Table.Cell>
                    <Table.Cell>Discharged</Table.Cell>
                    <Table.Cell>Bengaluru</Table.Cell>
                    <Table.Cell>MG Road</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>106</Table.Cell>
                    <Table.Cell>Sujay</Table.Cell>
                    <Table.Cell>M2U2</Table.Cell>
                    <Table.Cell>165</Table.Cell>
                    <Table.Cell>15/03/2020</Table.Cell>
                    <Table.Cell>01/04/2020</Table.Cell>
                    <Table.Cell>Discharged</Table.Cell>
                    <Table.Cell>Delhi</Table.Cell>
                    <Table.Cell>Brigade Road</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>109</Table.Cell>
                    <Table.Cell>Ajay</Table.Cell>
                    <Table.Cell>M3U6</Table.Cell>
                    <Table.Cell>250</Table.Cell>
                    <Table.Cell>15/05/2020</Table.Cell>
                    <Table.Cell>Not Yet</Table.Cell>
                    <Table.Cell>Not Discharged</Table.Cell>
                    <Table.Cell>Mumbai</Table.Cell>
                    <Table.Cell>Andheri</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );

};

export default Patients;