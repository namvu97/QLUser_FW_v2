import React, { Component } from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import TopApp from '../components/TopApp'
import TableUser from '../components/TableUser'
import AddUser from '../components/AddUser'

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      appID: this.props.id,
      editUser: {},
      showModal: false,
      showEdit: false,
      showAdd: false,
      id: 0,
      data: []
    };
  }

  componentDidMount() {
    if(!localStorage.getItem(`user-data-${this.state.appID}`)) {
      localStorage.setItem(`user-data-${this.state.appID}`, JSON.stringify(this.state.data))
    }
    let data = localStorage.getItem(`user-data-${this.state.appID}`);
    this.setState({
        data: JSON.parse(data)
    })
  }

  handleShowModal = () => {
    this.setState({
      showModal: true,
      showAdd: true
    });
  };

  onSubmit = values => {
    values.id = this.state.id;
    ++values.id
    this.state.data.push(values);
    this.setState({
      showModal: false,
      showAdd: false,
      id: values.id,
      data: this.state.data
    })
    localStorage.setItem(`user-data-${this.state.appID}`, JSON.stringify(this.state.data))
  }

  updateUser = values => {
    let newUser = this.state.data.map( item => item.id === values.id ? values : item);
    this.setState({
      data: newUser,
      showModal: false,
      showEdit: false
    })
    localStorage.setItem(`user-data-${this.state.appID}`, JSON.stringify(newUser));
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      showEdit: false,
      showAdd: false
    });
  };

  handleEditAction = (id) => {
    let findUser = this.state.data.find( item => item.id === id);
    this.setState({
      showModal: true,
      showEdit: true,
      editUser: {...findUser}
    })
    console.log(findUser)
  }

  handleDeleteAction = (id) => {
    let newArray = this.state.data.filter( item => item.id !== id );
    this.setState({
      data: newArray
    });
    localStorage.setItem(`user-data-${this.state.appID}`, JSON.stringify(newArray) )
  }

  onSubmitSearch = values => {
    let currentData = JSON.parse(localStorage.getItem(`user-data-${this.state.appID}`));
    if(values.search) {
        let currentUser = currentData.filter( item => item.name.indexOf(values.search) > -1 );
        console.log(currentUser);
        this.setState({
          data: currentUser
        });
    }else {
        this.setState({
            data: currentData
        })
    }
    
  }

  render() {
    return (
      <>
        <TopApp onSubmitSearch={this.onSubmitSearch} handleShowModal={this.handleShowModal} />
        <TableUser data={ this.state.data } handleEditAction={ this.handleEditAction } handleDeleteAction={ this.handleDeleteAction } />
        <AddUser showModal={ this.state.showModal } handleCloseModal={ this.handleCloseModal } showAdd={ this.state.showAdd } showEdit={ this.state.showEdit } onSubmit={ this.onSubmit } updateUser={ this.updateUser } editUser={ this.state.editUser } />
      </>     
    )
  }
}
