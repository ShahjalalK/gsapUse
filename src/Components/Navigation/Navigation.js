import React from 'react'
import './Navigation.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../Image/logo.png'
const Navigation = () => {
    return (
        <>
            <nav className="navbars">
                <div className="container">
                    <div className="navbar-inner">
                        <div className="logo">
                            <Link><img src={logo} alt="" /></Link>
                        </div>
                        <ul className="nav-manu">
                            <li>
                                <NavLink activeClassName="active" to="/feature" exact>Features</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/work">Works</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/team">Our Team</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/testmonials">Testimonials</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/download">Download</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navigation
