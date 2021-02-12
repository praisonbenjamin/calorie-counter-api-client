import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export class Header extends React.Component {

	render() {

		return (
			<div className="row nav-bar-public row">
				<h1 className="col-6"><Link to="/">Calorie Counter</Link></h1>
				<nav className="col-6 nav-public">
					<ul id="menu">
						<Link to="/dashboard">Track!</Link>
					</ul>
				</nav>
			</div>
		);
	}
}


export default Header;