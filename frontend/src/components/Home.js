import React from 'react';
import '../styles/home.css'

class Home extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			food_days : [],
			instant_food : []
		}
	}

	// componentDidMount(){
	// 	var token = localStorage.getItem('token')
	// 	if(token == null || token === undefined || token === "undefined"){
	// 		window.location.href = "/signup"
	// 	}
	// }

	render() {
		return (
            <div className="bigbox">
                <div id='home_page_top_buttons'>
					<button className="food30days">Food 30 days</button>
					<button className="instantfood">Instant Food</button>
					<button className="adddonation">Add donation</button>
				</div>
				<div className="bottombox">
					<span className="bottombox-name">
						shubham
					</span>
					<span className="bottombox-type">type
					</span>
					<span className="bottombox-category">category</span>
					<span className="bottombox-location">location</span>
					<button className="buy">Buy</button>
				</div>
				<div>

				</div>
            </div>
		);
	}
}

export default Home;