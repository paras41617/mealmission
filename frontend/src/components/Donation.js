import React from "react";
import "../styles/donation.css";

class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
      loaded: false,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: localStorage.getItem("username"),
      }),
    };
    console.log(requestOptions);
    fetch("http://127.0.0.1:8000/api/user_donations/", requestOptions)
      .then((data) => data.json())
      .then((result) => {
        console.log(result);
        this.setState({ donations: result["donations"], loaded: true });
        // console.log("data : ", result["donations"]);
        // this.setState({ food_days: result["donations"], loaded: true });
      });
  }

  render() {
    return (
      <div style={{ color: "white" }}>
        {this.state.loaded
          ? this.state.donations.map((donation, i) => (
              <div style={{display:"flex"}} key={i} id={i}>
                <span className="bottombox_item_donation">
                  {donation["donation"]["title"]}
                </span>
                <span className="bottombox_item_donation">
                  {donation["donation"]["type"]}
                </span>
                <span className="bottombox_item_donation">
                  {donation["donation"]["veg"]}
                </span>
                <span className="bottombox_item_donation">
                  {donation["donation"]["location"]}
                </span>
                <span className="bottombox_item_donation">
                  {donation["donation"]["booked"] ? "Booked" : "Not Booked"}
                </span>
                {donation["order"] !== "None" ? (
                  <div>
                    <span className="bottombox_item_donation">
                      Booked by : {donation["order"]["name"]}
                    </span>
                    <span className="bottombox_item_donation">
                      Booker Location : {donation["order"]["location"]}
                    </span>
                  </div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Donation;
