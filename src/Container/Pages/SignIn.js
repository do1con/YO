import React, { Component } from 'react'

export default class SignIn extends Component {

  /* static defaultProps = {
    signInState: false
  } */

  componentDidMount(){
    console.log(this.props.signInstate)
  }

  render() {
    return (
      <div className="is-clearfix container">
        <form method="post" action="./server/routes/index.js">
          <input type="text" name="id" id="id" placeholder="Your ID"/>
          <input type="text" name="nickname" placeholder="name"/>hju
          <input type="password" name="passwords" id="passwords" placeholder="1111"/>
          <input type="text" name="email" placeholder="1111"/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
