import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export class Header extends React.Component {

	render() {

		return (
			<div className="row nav-bar-public row">
				<h1 className="col-6"><Link to="/dashboard">Calorie Guide</Link></h1>
				<nav className='nav' role='navigation'>
						<Link to="/addDay">Add Day</Link>
						<Link to="/addMeal">Add Meal</Link>
				</nav>
			</div>
		);
	}
}


export default Header;