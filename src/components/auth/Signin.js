import React, { Component } from 'react';

class SignIn extends Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="iput-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={}/>
          </div>
          <div className="iput-field">
            <label htmlFor="password">Email</label>
            <input type="password" id="password" onChange={}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0"></button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;