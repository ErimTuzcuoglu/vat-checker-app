import React, { Component } from 'react';
import { Strings } from '../util/Strings';
import { Navbar } from '../components';
import '../sass/Contact.sass';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar brandTitle={Strings.contact} />
                <div class="homeContainer">
                    <p className="paragraph">{Strings.contactContent}</p>
                </div>
            </div>
        );
    }
}

export { Contact };
