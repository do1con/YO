import React, { Component } from 'react'
import OneAlbum from './OneAlbum.js'

export default class TopAlbum extends Component {

  state = {
    currentAlbum: 0
  }

  componentDidMount() {
    this._listMusic()
  }

  _listMusic = async () => {
    const albums = await this._callApi()
    await this.setState({
      albumList: albums
    })
    this._callOneAlbum()
  }

  _callApi = () => {
    return fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=all&limit=7&page=1&api_key=e87431f958e5fa321c1dd874c4f9bbe7&format=json')
    .then(album => album.json())
    .catch(err => console.log(err))
  }

  _callOneAlbum = () => {
    const album = this.state.albumList.albums.album
    const axelel = album.map((info, index) => {
      return <OneAlbum artist={info.artist.name} albumName={info.name} image={info.image[2]["#text"]} key={index} />
    })
    return axelel
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-full">
          <div className="columns is-mobile is-padding">
            <div className="column">
              <h3 className="is-size-3 has-text-weight-bold is-title">Top Albums</h3>
            </div>
            <div className="column is-2 is-pulled-right is-pulled-bottom has-text-right">
              <a href="#" className="is-size-6 has-text-grey">more</a>
            </div>
          </div>
          <hr className="has-background-grey"/>
          <div className="columns is-padding is-touch is-4-touch">
            {this.state.albumList ? this._callOneAlbum() : 'Loading...'}
          </div>
        </div>
      </div>
    )
  }
}
