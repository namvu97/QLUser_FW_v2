import React, { Component } from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import Main from './screens/Main'

export default class App extends Component {
  render() {
    let arrayQLUser = []
    for (let i = 0; i< 100; i++) {
        arrayQLUser.push(<Main key={i} id={i}/>)
    }
    return (
      <>
        {arrayQLUser}
      </>     
    )
  }
}
