import React, { Component } from "react";
import "./signup.css";





class App extends Component {


  state = {
    credentials: {username: '', password: ''}
  }
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: null,
  //     password: null,
  //     formErrors: {
  //       email: "",
  //       password: "",
  //     }
  //   };
  // }

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/auth/',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
  }).then( data => data.json())
  .then(
    data => {
      this.props.userLogin(data.token);
    }
  )
  .catch( error => console.error(error))
}


login = event => {
  fetch('http://127.0.0.1:8000/auth/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(this.state.credentials)
  })
  .then( data => data.json())
  .then(
    data => {
      this.props.userLogin(data.token);
    }
  )
  .catch( error => console.error(error))
}

inputChanged = event => {
  const cred = this.state.credentials;
  cred[event.target.name] = event.target.value;
  this.setState({credentials: cred});
}


  
  render() {
    

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className="email">
              <label htmlFor="email">Username</label>
              <input
                // className={formErrors.email.length > 0 ? "error" : null}
                placeholder="username"
                type="text"
                name="username"
                noValidate
                onChange={this.inputChanged}
              />
              {/* {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )} */}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                // className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.inputChanged}
              />
              {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )} */}
            </div>
            <div className="login">
              <button type="button" onClick={this.login}>Login</button>
          
              <a href="signup"><small>Don't Have an Account?</small></a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
