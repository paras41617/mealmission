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

	componentDidMount(){
		var token = localStorage.getItem('token')
		if(token == null || token === undefined || token === "undefined"){
			window.location.href = "/signup"
		}
	}

	render() {
		return (
            <div>
                <div id='home_page_top_buttons'>
					<button>Food 30 days</button>
					<button>Instant Food</button>
					<button>Add donation</button>
				</div>
				<div>

				</div>
            </div>
		);
	}
}

export default Home;