import React, { Component } from "react";
import "../styles/signup.css";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password is not matching");
      window.location.reload();
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }),
      };
      console.log(requestOptions);
      fetch("http://127.0.0.1:8000/authentication/create_user/", requestOptions)
        .then((data) => data.json())
        .then((result) => {
          if (result["message"] === "success") {
            window.location.href = "/login";
          } else {
            alert("Something is wrong, Try Again");
          }
        });
    }
  };

  redirect_login(){
    window.location.href = '/login'
  }

  render() {
    const { username, email, password, confirmPassword } = this.state;

    return (
      <div className="signup-page">
        <h1 className="mealmission">MealMiSSion</h1>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group-signup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div  style={{ display: 'flex'}}>
            <button type="submit">SignUp</button>
            <button style={{marginLeft:"5%"}} onClick={this.redirect_login}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
