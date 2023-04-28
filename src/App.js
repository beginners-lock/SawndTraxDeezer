import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import First from './components/first';
import './App.css';

class App extends Component {
	render(){
		return (
			<div id="body">
				<BrowserRouter>
					<Routes>
						<Route path="/SawndTraxDeezer" element={<First />} />
						<Route path="/" element={<First />} />
						<Route path="/SawndTraxDeezer/home" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
