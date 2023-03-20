import React from "react";
import "../styles/type.css";

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donor: true,
      clicked:false
    };
    this.change_type = this.change_type.bind(this);
  }

  change_type() {
    this.setState({ clicked: !this.state.clicked , donor:!this.state.donor});
  }

  render() {
    return (
      <div>
        {!this.state.clicked ? (
            <div>
                <button onClick={this.change_type}>Take</button>
                <button onClick={this.change_type}>Donor</button>
            </div>
        ) : null}
        {this.state.donor?(
                <div>
                    <button>Restaurant</button>
                    <button>Individual</button>
                </div>
        ):(
                <div>
                    <button>NGO</button>
                    <button>Individual</button>
                    <button>Shelter</button>
                </div>
        )}
      </div>
    );
  }
}

export default Type;
