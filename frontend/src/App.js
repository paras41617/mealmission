import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Type from './components/Type';
import Login from './components/Login';
class App extends React.Component {

	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route exact path="/signup" element={<Signup/>} />
					<Route exact path="/type" element={<Type/>} />
					<Route exact path="/login" element={<Login/>} />
					<Route exact path="/donation" element={<Login/>} />
				</Routes>
			</Router>
		);
	}
}

export default App;