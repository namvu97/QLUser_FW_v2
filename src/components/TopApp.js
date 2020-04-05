import React, { Component } from 'react'
import { Icon, ButtonToolbar, Button, ButtonGroup, IconButton } from 'rsuite';
import { Form, Field } from 'react-final-form'

export default class TopApp extends Component {
    render() {
        return (
            <div className="table-toolbar">
                <Form className="inner-left"
                    onSubmit={this.props.onSubmitSearch }
                    initialValues={{ }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={ handleSubmit } style={{ display: "flex", marginTop: "2px" }} >
                        <div>
                        <Field
                            name="search"
                            component="input"
                            type="text"
                            placeholder="Search"
                            style={{ marginTop: "6px" }}
                            size={"30"}
                        />
                        </div>
                        <div className="buttons">
                        <ButtonGroup>
                            <IconButton type="submit" icon={<Icon icon="search" />}  onClick={this.searchUser} />
                        </ButtonGroup>
                        </div>
                    </form>
                    )}
                />

                <ButtonToolbar className="inner-right">
                    <Button appearance="primary" onClick={this.props.handleShowModal}>
                    New
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }
}
