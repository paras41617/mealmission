import React, { Component } from "react";
import "../styles/login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };
    console.log(requestOptions);
    fetch("http://127.0.0.1:8000/authentication/api/token/", requestOptions)
      .then((data) => data.json())
      .then((result) => {
        localStorage.setItem("token", result["access"]);
        localStorage.setItem("refresh", result["refresh"]);
        localStorage.setItem('username' , this.state.username)
        window.location.href = "/";
      });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="Login-page">
        <h1 className="Login">Log in</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label className="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
