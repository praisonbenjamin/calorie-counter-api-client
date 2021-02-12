import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage'

export default function landingPage() {
	return(
		<div id="about">
			<div className="row">
				<h2 className="col-12">Track your calories</h2>
			</div>
			<p className="col-6">and meals with no fuss!</p>
			<p className="col-6">Simple and easy</p>
			<p className="col-12">User profiles coming soon!!</p>
			<button><Link to="/dashboard">Start tracking!</Link></button>
			
		</div>
	);
}