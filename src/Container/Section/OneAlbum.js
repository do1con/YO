import React, { Component } from 'react'

export default class OneAlbum extends Component {

  static defaultProps = {
    artist: 'Artist',
    albumName: 'Album',
    image: 'Loading'
  }

  render() {
    return (
      <div className="column box">
        <a href="#" className="has-text-black-ter is-flex-mobile is-hover-scaleup">
          <figure className="image is-inline-block">
            <img src={this.props.image} alt={this.props.albumName} />
          </figure>
          <p>
            <span className="title is-size-6 is-size-4-mobile">{this.props.albumName}</span>
            <br/>
            <span className="subtitle is-size-7 is-size-5-mobile has-text-grey">{this.props.artist}</span>
          </p>
        </a>
      </div>
    )
  }
}
