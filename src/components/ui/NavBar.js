import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					HeroesApp
				</Link>

				<div className='navbar-collapse'>
					<div className='navbar-nav'>
						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/marvel'>
							Marvel
						</NavLink>

						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/dc'>
							DC
						</NavLink>
						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/search'>
							Search
						</NavLink>
					</div>
				</div>

				<div className='navbar-collapse collapse d-flex justify-content-end dual-collapse2'>
					<ul className='navbar-nav ml-auto '>
						<NavLink
							activeClassName='active'
							className='nav-item nav-link'
							exact
							to='/login'>
							Logout
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};
