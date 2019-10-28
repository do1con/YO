import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {

  state ={
    burgerState: false
  }
  
  _burgerToggle = () => {
    this.setState({
      burgerState: !this.state.burgerState
    })
  }

  _resize = () => {
    if(window.innerWidth > 1023 ){
      this.setState({
        burgerState: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this._resize)
  }

  render() {
    return (
      <header className="header">
        <div className="columns">
          <div className="container">
            <div className="columns is-vcentered is-marginless">
              <div className="column is-two-thirds is-full-touch">
                <div className="navbar-brand">
                  <a href="#" className="navbar-item">
                    <h1 className="is-size-1 is-size-4-touch has-text-weight-bold is-family-primary">YO</h1>
                  </a>
                  <div className="navbar-burger burger" data-target="nav-menu" onClick={this._burgerToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="column is-hidden-touch">
                <div className="field has-addons has-addons-centered is-pulled-right">
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>Album</option>
                        <option>Title</option>
                        <option>Nickname</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <input className="input" type="text" placeholder="search" />
                  </p>
                  <p className="control">
                    <a className="button is-info">
                      Search
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns has-background-light">
          <div className="container">
            <div className={['columns', 'is-vcentered', 'is-hidden-touch', 'navbar-menup', 'is-clearfix', this.state.burgerState ? 'is-active' : ''].join(' ')} id="nav-menu">
              <div className="column is-9">
                <ul className="navbar-start">
                  <li><a href="#" className="navbar-item has-text-black-ter">Best Albums</a></li>
                  <li><a href="#" className="navbar-item has-text-black-ter">Genres</a></li>
                  <li><a href="#" className="navbar-item has-text-black-ter">Community</a></li>
                </ul>
              </div>
              <div className="column">
                <div className="field is-grouped is-pulled-right">
                  <p className="control">
                    <button className="button is-small is-link">
                      <span className="icon">
                        <i className="fa fa-user-plus"></i>
                      </span>
                      <span>SIGN UP</span>
                    </button>
                  </p>
                  <p className="control">
                    <button className="button is-small">
                      <span className="icon">
                        <i className="fa fa-user"></i>
                      </span>
                      <span>SIGN IN</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
