import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
class App extends React.Component {

	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route exact path="/signup" element={<Signup/>} />
				</Routes>
			</Router>
		);
	}
}

export default App;