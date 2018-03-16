import React, {Component} from 'react';
import App from "../App";

export class Navbar extends Component {
    render() {
        return (
            <div data-collapse="medium" data-animation="default" data-duration={400} className="navbar w-nav">
                <div className="w-container"><a href="/" className="brand-wrapper w-nav-brand">
                    <div className="logo-text">Blackbird</div>
                </a>
                    <nav role="navigation" className="nav-menu w-clearfix w-nav-menu">
                        <a href="/" className="nav-link w-nav-link">HOME</a>
                        <a href="/services" className="nav-link w-nav-link">services</a>
                        <a href="/about" className="nav-link w-nav-link">About</a>
                        <a href="/contact" className="nav-link w-nav-link">Contact</a>
                    </nav>
                    <div className="menu-button w-nav-button">
                        <div className="w-icon-nav-menu"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;