import React, { Component } from 'react'
import { Button, Modal } from 'rsuite';
import { Form, Field } from 'react-final-form'

export default class AddUser extends Component {
    
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                <Modal.Header>
                    {this.props.showAdd ? <Modal.Title>Add New User</Modal.Title> : ""}
                    {this.props.showEdit ? <Modal.Title>Edit User</Modal.Title> : ""}
                </Modal.Header>
                <Modal.Body >
                    <Form
                    onSubmit={this.props.showAdd ? this.props.onSubmit : this.props.updateUser }
                    initialValues={{ }}
                    validate={values => {
                        const errors = {}
                        if (!values.name) {
                          errors.name = 'Required Name'
                        }
                        if (!values.address) {
                          errors.address = 'Required Address'
                        }
                        if (!values.phone) {
                          errors.phone = 'Required Phone'
                        }
                        if (!values.email) {
                            errors.email = 'Required Email'
                        }
                        return errors
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={ handleSubmit }>
                        <div>
                            <Field
                            name="id"
                            component="input"
                            type="hidden"
                            initialValue={ this.props.showEdit ? this.props.editUser.id : "" }
                            />
                        </div>
                        <Field name="name">
                            {({ input, meta }) => (
                            <div style={{ marginBottom: '10px' }}>
                                <label style={{ color: '#000', marginRight: '50px'}} >Name</label>
                                <input {...input} type="text" placeholder="Full Name" style={{ width: '350px' }} />
                                {meta.error && meta.touched && <span>{" " + meta.error}</span>}
                            </div>
                            )}
                        </Field>
                        <Field name="address">
                            {({ input, meta }) => (
                            <div style={{ marginBottom: '10px' }}>
                                <label style={{ color: '#000', marginRight: '37px'}} >Address</label>
                                <input {...input} type="text" placeholder="Address" style={{ width: '350px' }} />
                                { meta.error && meta.touched && <span>{" " + meta.error}</span> }
                            </div>
                            )}
                        </Field>
                        <Field name="phone">
                            {({ input, meta }) => (
                            <div style={{ marginBottom: '10px' }}>
                                <label style={{ color: '#000', marginRight: '48px'}} >Phone</label>
                                <input {...input} type="text" placeholder="Phone Number" style={{ width: '350px' }} />
                                { meta.error && meta.touched && <span>{" " + meta.error}</span> }
                            </div>
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                            <div>
                                <label style={{ color: '#000', marginRight: '54px'}} >Email</label>
                                <input {...input} type="email" placeholder="Email Address" style={{ width: '350px' }} />
                                { meta.error && meta.touched && <span>{" " + meta.error}</span> }
                            </div>
                            )}
                        </Field>
                        <div className="buttons" style={{ marginTop: '20px', textAlign: 'right'}}>
                            {this.props.showAdd ? <Button type="submit" appearance="primary"> ADD NEW </Button> : ""}
                            {this.props.showEdit ? <Button type="submit" appearance="primary"> Edit </Button> : ""}
                            <Button type="button" onClick={this.props.handleCloseModal} appearance="subtle">
                            CANCEL
                            </Button>
                        </div>
                        </form>
                    )}
                    />            
                </Modal.Body>
            </Modal>
        )
    }
}
