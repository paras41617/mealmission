import React from "react";
import "../styles/home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food_days: [],
      instant_food: [],
      add: false,
      instant: false,
      loaded: false,
      location: "",
      buy_flag: false,
    };
    this.switch_package = this.switch_package.bind(this);
    this.switch_instant = this.switch_instant.bind(this);
    this.switch_add = this.switch_add.bind(this);
    this.buy = this.buy.bind(this);
    this.logout = this.logout.bind(this);
    this.buy_button = this.buy_button.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == "null" ||
      localStorage.getItem("token") === "undefined" ||
      localStorage.getItem("token") === undefined
    ) {
      window.location.href = "/signup";
    }
    this.fetch_packaged_food();
  }

  fetch_packaged_food() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    console.log(requestOptions);
    fetch("http://127.0.0.1:8000/api/packed_donations/")
      .then((data) => data.json())
      .then((result) => {
        console.log("data : ", result["donations"]);
        this.setState({ food_days: result["donations"], loaded: true });
      });
  }

  switch_package() {
    this.setState({ add: false, instant: false });
  }
  switch_instant() {
    this.setState({ add: false, instant: true, loaded: false });
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    console.log(requestOptions);
    fetch("http://127.0.0.1:8000/api/instant_donations/")
      .then((data) => data.json())
      .then((result) => {
        console.log("data : ", result["donations"]);
        this.setState({ instant_food: result["donations"], loaded: true });
      });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  switch_add() {
    this.setState({ add: true, instant: false });
  }

  buy(id) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: localStorage.getItem("username"),
        donation_id: id,
        location: this.state.location,
      }),
    };
    console.log(requestOptions);
    fetch("http://127.0.0.1:8000/api/buy/", requestOptions)
      .then((data) => data.json())
      .then((result) => {
        console.log(result);
        // console.log("data : ", result["donations"]);
        if (result["message"] === "success") {
          alert("Booked");
          this.setState({ buy_flag: false });
            window.location.reload();
        } else {
          alert("Some Error Occurred");
        }
        // this.setState({ food_days: result["donations"], loaded: true });
      });
  }

  buy_button() {
    this.setState({ buy_flag: true });
  }

  logout() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refresh: localStorage.getItem("refresh"),
      }),
    };
    console.log(requestOptions);
    fetch("http://127.0.0.1:8000/authentication/logout/", requestOptions)
      .then((data) => data.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("username", null);
        localStorage.setItem("token", null);
        localStorage.setItem("refresh", null);
        window.location.reload();
        // console.log("data : ", result["donations"]);
        // this.setState({ food_days: result["donations"], loaded: true });
      });
  }

  redirect_form() {
    window.location.href = "/donations";
  }

  render() {
    return (
      <div>
        <div style={{ marginRight: "5%" }}>
          <button style={{ marginRight: "2%" }} onClick={this.logout}>
            Logout
          </button>
          <button onClick={this.redirect_form}>My Donations</button>
        </div>
        <div className="bigbox">
          <div id="home_page_top_buttons">
            <button onClick={this.switch_package} className="food30days">
              Food 30 days
            </button>
            <button onClick={this.switch_instant} className="instantfood">
              Instant Food
            </button>
            <button onClick={this.switch_add} className="adddonation">
              Add donation
            </button>
          </div>
          {this.state.add
            ? null
            : this.state.instant
            ? this.state.loaded
              ? this.state.instant_food.map((donation, i) => (
                  <div key={i} id={i}>
                    <span className="bottombox-name">{donation["title"]}</span>
                    <span className="bottombox-type">{donation["type"]}</span>
                    <span className="bottombox-category">
                      {donation["veg"]}
                    </span>
                    <span className="bottombox-location">
                      {donation["location"]}
                    </span>
                    {this.state.buy_flag ? null : (
                      <button onClick={this.buy_button} className="buy">
                        Buy
                      </button>
                    )}
                    {this.state.buy_flag ? (
                      <div>
                        <input
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        required
                      />
                        <button onClick={() => this.buy(donation["id"])}>
                          Order
                        </button>
                      </div>
                    ) : null}
                  </div>
                ))
              : null
            : this.state.loaded
            ? this.state.food_days.map((donation, i) => (
                <div key={i} id={i}>
                  <span className="bottombox-name">{donation["title"]}</span>
                  <span className="bottombox-type">{donation["type"]}</span>
                  <span className="bottombox-category">{donation["veg"]}</span>
                  <span className="bottombox-location">
                    {donation["location"]}
                  </span>
                  {this.state.buy_flag ? null : (
                    <button onClick={this.buy_button} className="buy">
                      Buy
                    </button>
                  )}
                  {this.state.buy_flag ? (
                    <div>
                      <input
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        required
                      />
                      <button onClick={() => this.buy(donation["id"])}>
                        Order
                      </button>
                    </div>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Home;
