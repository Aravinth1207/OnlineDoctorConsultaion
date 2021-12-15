import React, { Component } from "react";
import "./signup.css";
import * as Axios from 'axios';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: null,
      email: null,
      userName: null,
      password: null,
      phone: null,
      gender:null,
      age:null,
      formErrors: {
        fullName: "",
        email: "",
        userName:'',
        phone:"",
        password: "",
        gender:"",
        age:"",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
     fetch("http://127.0.0.1:8000/patientregister/",
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'
          ,'Accept': 'application/json'},
    
        body: JSON.stringify({
        username:this.state.userName,
        email:this.state.email,
        password:this.state.password,
        gender:this.state.gender,
        age:this.state.age,
        mobile:this.state.phone,
        Name:this.state.fullName,

      })
    
  });
}

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "fullName":
        formErrors.fullName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "phone":
      formErrors.phone =
        value.length < 10 ? "invalid phone number" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "gender":
        formErrors.gender =
          value.length < 4 ? "please choose gender" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} Validate>
            <div className="fullName">
              <label htmlFor="fullName">Name</label>
              <input
                className={formErrors.fullName.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="fullName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fullName.length > 0 && (
                <span className="errorMessage">{formErrors.fullName}</span>
              )}
            </div>
            <div className="userName">
              <label htmlFor="userName">Username</label>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="Username"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.userName.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
              )}
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                className={formErrors.phone.length > 0 ? "error" : null}
                placeholder="Phone"
                type="tel"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
            {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="gender">
              <label htmlFor="gender">Gender</label>
              <input
                className={formErrors.gender.length > 0 ? "error" : null}
                placeholder="Gender"
                type="Text"
                name="gender"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.gender.length > 0 && (
                <span className="errorMessage">{formErrors.gender}</span>
              )}
            </div>
            <div className="age">
              <label htmlFor="age">Age</label>
              <input
                className={formErrors.age.length > 0 ? "error" : null}
                placeholder="Age"
                type="Integer"
                name="age"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.age.length > 0 && (
                <span className="errorMessage">{formErrors.age}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="createAccount">
              <button type="submit" onClick={event =>  window.location.href='login/'}>Create Account</button>
              <a href="login"><small>Already Have an Account?</small></a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
