import React, { Component } from 'react'
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export default class TableUser extends Component {
    render() {
        return (
            <div>
                <Table
                    style={{margin: '0 auto'}}
                    height={400}
                    width={1050}
                    data={this.props.data}
                    onRowClick={data => {
                    // console.log(data);
                    }}
                >
                    <Column width={50} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                    </Column>

                    <Column width={150} align="center">
                    <HeaderCell>Full Name</HeaderCell>
                    <Cell dataKey="name" />
                    </Column>

                    <Column width={150} align="center">
                    <HeaderCell>Address</HeaderCell>
                    <Cell dataKey="address" />
                    </Column>

                    <Column width={150} align="center">
                    <HeaderCell>Phone</HeaderCell>
                    <Cell dataKey="phone" />
                    </Column>

                    <Column width={250} align="center">
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="email" />
                    </Column>
                    <Column width={150} align="center" fixed="right">
                    <HeaderCell>Action</HeaderCell>

                    <Cell>
                        {rowData => {
                        // function handleAction() {
                        //   alert(`id:${rowData.id}`);
                        // }
                        return (
                            <span>
                            <a href="/" className="edit" onClick={() => this.props.handleEditAction(rowData.id)}> Edit </a> |{' '}
                            <a href="/" className="remove" onClick={() => this.props.handleDeleteAction(rowData.id)}> Remove </a>
                            </span>
                        );
                        }}
                    </Cell>
                    </Column>
                </Table>
            </div>
        )
    }
}
