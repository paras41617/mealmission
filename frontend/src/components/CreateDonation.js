import React from 'react';
import '../styles/create_donation.css'

class CreateDonation extends React.Component {

	state = {
		Title: "",
		Text: "",
		Type: "",
		Veg: "",
		Location: "",
		Contributor: "",

	};

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	/*   handleFormSubmit = (e) => {
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
	*/

	render() {
		const { Title, Text, Type, Veg, Location, Contributor } = this.state;

		return (
			<div className="Donation_Page">
				<h1 className="heading_Donation">Donation Form</h1>
				<form onSubmit={this.handleFormSubmit}>
					<div className="form-group-Donation">
						<label htmlFor="Title">Title</label>
						<input
							type="text"
							name="Title"
							value={Title}
							onChange={this.handleInputChange}
							required
						/>
					</div>
					<div className="form-group-Donation">
						<label htmlFor="Text">Text</label>
						<input
							type="text"
							name="Text"
							value={Text}
							onChange={this.handleInputChange}
							required
						/>
					</div>
					<div className="form-group-Donation">
						<label htmlFor="type">Type</label>
						<input
							type="type"
							name="type"
							value={Type}
							onChange={this.handleInputChange}
							required
						/>
					</div>
					<div className="form-group-Donation">
						<label htmlFor="veg">veg</label>
						<input
							type="veg"
							name="veg"
							value={Veg}
							onChange={this.handleInputChange}
							required
						/>
					</div>
					<div className="form-group-Donation">
						<label htmlFor="Location">Location</label>
						<input
							type="Location"
							name="Location"
							value={Location}
							onChange={this.handleInputChange}
							required
						/>
					</div>
					<div className="form-group-Donation">
						<label htmlFor="Contributor">Contributor</label>
						<input
							type="Contributor"
							name="Contributor"
							value={Contributor}
							onChange={this.handleInputChange}
							required
						/>
					</div>
					<div style={{ display: 'flex' }}>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}


export default CreateDonation;