import React, { Component } from 'react';
import '../sass/FixedNavbar.sass';
import { Strings } from '../util/Strings';

class FixedNavbar extends Component {

    state = { toggle: false }

    toggleCollapse = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <div>
                <nav class="navbar fixedNavbar navbar-expand-lg navbar-dark fixed-top">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" onClick={() => this.toggleCollapse()} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse" + (this.state.toggle ? " show" : "")} id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto navUl">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="mailto:support@despatchcloud.com">{Strings.mail}</a>
                            </li>
                            <li class="nav-item">
                                <p class="nav-link text-light" >{Strings.phone}</p>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto navUl navUlRight">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="https://despatchcloud.com/" target="blank">{Strings.despatchCloud}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export { FixedNavbar }