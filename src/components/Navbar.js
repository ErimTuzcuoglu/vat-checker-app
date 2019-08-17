import React, { Component } from 'react';
import '../sass/Navbar.sass';
import '../sass/FixedNavbar.sass';
import { Strings } from '../util/Strings';
import { Link } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar secondNav navbar-expand-lg navbar-dark">
                    <div className="collapse navbar-collapse show">
                        <ul class="navbar-nav mr-auto navUl">
                            <li class="nav-item">
                                <Link className="navbar-brand secondNavBrand text-light" to={Strings.exactPath}>{this.props.brandTitle}</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto navUl navUlRight">
                            <li class="nav-item">
                                <Link className="nav-link text-light" to={Strings.exactPath}>{Strings.home}</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-light" to={Strings.contactPath}>{Strings.contact}</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export { Navbar }