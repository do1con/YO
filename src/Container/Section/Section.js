import React, { Component } from 'react'
import TopAlbum from './TopAlbum.js'
import Genres from './Genres.js'
import Community from './Community.js'
import News from './News.js'

export default class Section extends Component {

  render() {
    return (
      <section className="section">
        <div className="container">
          <TopAlbum />
          <div className="columns is-touch">
            <div className="column">
              <Genres />
            </div>
            <div className="column">
              <News /> 
              <Community />
            </div>
            <div className="column is-hidden-touch is-hidden-desktop-only has-margin">
              <div className="notification">
                <p class="title">This Website.....</p>
                <p class="subtitle">Top tile</p>
                <p>
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                  i built this website but still im thinking that im suck
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
