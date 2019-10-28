import React, { Component } from 'react'
import Header from './Header/Header.js'
import Section from './Section/Section.js'
import Footer from './Footer/Footer.js'

export default class Container extends Component {
  render() {
    return (
      <div className="wrap">
          <Header />
          <Section />
          <Footer />
      </div>
    )
  }
}
