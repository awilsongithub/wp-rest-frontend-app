// import react, navlink, write functional component that returns the jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import robotIcon from "../media/002-robot-head.svg";

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg bg-primary-gradient'>
			<div className='container'>
				<NavLink to='/' exact className='navbar-brand'>
					<img
						src={robotIcon}
						alt='robot brand icon'
						className='icon-nav-icon'
					></img>
				</NavLink>

				{/* <div> */}
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navBarNav'
					aria-controls='navBarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse flex-row-reverse'
					id='navBarNav'
				>
					<ul className='navbar-nav align-items-center'>
						<li className='nav-item'>
							<NavLink to='/community' exact className='nav-link'>
								COMMUNITY
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/store' exact className='nav-link'>
								STORE
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/support' exact className='nav-link'>
								SUPPORT
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/account' exact className='nav-link'>
								ACCOUNT
							</NavLink>
						</li>
					</ul>
				</div>
				{/* </div> */}
			</div>
		</nav>
	);
}

export default Navbar;
