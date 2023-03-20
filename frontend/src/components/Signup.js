import React from 'react';
import '../styles/signup.css'

class Signup extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			food_days : [],
			instant_food : []
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

export default Signup;