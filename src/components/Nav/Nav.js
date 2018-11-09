import React, {Component} from 'react';
import './Nav.scss';
import {Link} from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<ol className="nav">
				{/*<li className='nav__item'><Link className='nav__link' to="/">main</Link></li>*/}
				{/*<li className='nav__item'><Link className='nav__link' to="/news">news</Link></li>*/}

				<li className='nav__item'><a className='nav__link' href="/">main</a></li>
				<li className='nav__item'><a className='nav__link' href="/news">news</a></li>
			</ol>
		);
	}
}

export default Nav;
