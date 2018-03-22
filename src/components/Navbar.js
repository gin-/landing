import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div data-collapse="medium" data-animation="default" data-duration={400} className="navbar w-nav">
                {/*<div className="w-container"><a href="/" className="brand-wrapper w-nav-brand">
                    <div className="logo-text">Blackbird</div>
                </a>
                    <nav role="navigation" className="nav-menu w-clearfix w-nav-menu">
                        <NavLink exact to="/" className="nav-link w-nav-link"
                              activeClassName="w--current">HOME</NavLink>
                        <NavLink to="/services" className="nav-link w-nav-link"
                              activeClassName="w--current">services</NavLink>
                        <NavLink to="/about" className="nav-link w-nav-link"
                              activeClassName="w--current">About</NavLink>
                        <NavLink to="/contacts" className="nav-link w-nav-link"
                              activeClassName="w--current">Contact</NavLink>
                    </nav>
                    <div className="menu-button w-nav-button">
                        <div className="w-icon-nav-menu"/>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default Navbar;