import React, { Component } from "react";
import "../styles/create_donation.css";

class CreateDonation extends Component {
  state = {
    title: "",
    text: "",
    location: "",
    type: "packed",
    veg: false,
    contributor: "individual",
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
        title: this.state.title,
        text: this.state.text,
        location: this.state.location,
        contributor: this.state.contributor,
        type: this.state.type,
        veg: this.state.veg,
        username: localStorage.getItem("username"),
      }),
    };
    console.log(requestOptions);
    fetch("http://127.0.0.1:8000/api/create_donation/", requestOptions)
      .then((data) => data.json())
      .then((result) => {
        if (result["message"] === "success") {
          alert("Successfull");
          window.location.href = "/";
        } else {
          alert("Something is wrong, Try Again");
        }
      });
  };

  redirect_login() {
    window.location.href = "/login";
  }

  render() {
    const { title, text, location } = this.state;

    return (
      <div className="signup-page">
        <h1 className="mealmission">MealMiSSion</h1>
        <h1>Food Form</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group-signup">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              name="text"
              value={text}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group-signup">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="drop_div">
            <select
              className="drop"
              onClick={this.handleInputChange}
              name="type"
              id="type"
            >
              <option value="packed">Packed</option>
              <option value="instant">Instant</option>
            </select>
          </div>
          <div className="drop_div">
            <select
              className="drop"
              onClick={this.handleInputChange}
              name="veg"
              id="veg"
            >
              <option value="veg">Veg</option>
              <option value="non_veg">Non Veg</option>
            </select>
          </div>
          <div className="drop_div">
            <select
              className="drop"
              onClick={this.handleInputChange}
              name="contributor"
              id="contributor"
            >
              <option value="individual">Individual</option>
              <option value="restaurant">Restaurant</option>
            </select>
          </div>
          <div style={{ display: "flex" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateDonation;
