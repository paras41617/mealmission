import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Type from './components/Type';
import Login from './components/Login';
import CreateDonation from './components/CreateDonation';
import Donation from './components/Donation'
class App extends React.Component {

	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route exact path="/signup" element={<Signup/>} />
					<Route exact path="/type" element={<Type/>} />
					<Route exact path="/login" element={<Login/>} />
					<Route exact path="/donations" element={<Donation/>} />
					<Route exact path="/donation_create" element={<CreateDonation/>} />
				</Routes>
			</Router>
		);
	}
}

export default App;