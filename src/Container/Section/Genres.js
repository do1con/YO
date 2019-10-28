import React, { Component } from 'react'

export default class Genres extends Component {

  componentDidMount(){
    this._giveGenreStlye()
    window.addEventListener('resize', this._giveGenreStlye)
  }

  _giveGenreStlye = () => {
    const fullWidth = document.querySelector('.genreList').offsetWidth
    const target = document.querySelectorAll('.genreList>li')
    target.forEach((i) => {
      i.style.height = (fullWidth/2) + 'px'
      i.querySelector('a').style.lineHeight = (fullWidth/2) + 'px'
    })
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-full">
          <div className="columns is-mobile is-padding">
            <div className="column">
              <h3 className="is-size-3 has-text-weight-bold is-title">Genres</h3>
            </div>
            <div className="column is-2 is-pulled-right is-pulled-bottom has-text-right">
              <a href="#" className="is-size-6 has-text-grey">more</a>
            </div>
          </div>
          <hr className="has-background-grey"/>
          <div className="columns is-padding is-desktop">
            <div className="column">
              <ul className="genreList is-clearfix">
                <li><a href="#" className="has-text-white rock title">ROCK</a></li>
                <li><a href="#" className="has-text-white hiphop title">HIPHOP</a></li>
                <li><a href="#" className="has-text-white indie title">INDIE</a></li>
                <li><a href="#" className="has-text-white jazz title">JAZZ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
