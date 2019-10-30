import React, { Component } from 'react'
import Header from './Header/Header.js'
import Section from './Section/Section.js'
import Footer from './Footer/Footer.js'
import SignIn from './Pages/SignIn.js'
import { thisExpression } from '@babel/types'

export default class Container extends Component {

  state = {
    section: 'Section'
  }

  _switchingSection = (value) => {
    this.setState({
      section: value
    })
    console.log(this.state.section)
  }

  _showSection = () => {
    switch(this.state.section){
      case 'Section':
        return <Section />
      case 'SignIn':
        return <SignIn />
      default:
        return 'error!'
    }
  }

  render() {
    return (
      <div className="wrap">
          <Header _switchingSection = {this._switchingSection} />
          {this._showSection()}
          <Footer />
      </div>
    )
  }
}
