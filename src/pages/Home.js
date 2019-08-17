import React, { Component } from 'react';
import { Strings } from '../util/Strings';
import { Navbar, MessageBox } from '../components';
import '../sass/Home.sass';
import { request, urls } from '../network';

const buildingImg = require('../img/building.png');

class Home extends Component {
    state = { vatNumber: "", callbackData: null }

    setVatNumber = (vatNumber) => {
        this.setState({ vatNumber: vatNumber.target.value })
    }

    callback = (callback) => {
        this.setState({ callbackData: callback.data })
    }

    sendRequest = () => {
        request(urls.check, { "vat_number": this.state.vatNumber }, this.callback)
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.sendRequest()
        }
    }

    render() {
        return (
            <div>
                <Navbar brandTitle={Strings.vatChecker} />
                <div class="container-fluid homeContainer">
                    <div class="row">
                        <div class="col-lg-4 leftContainer">
                            <p className="title">{Strings.homeTitle}</p>
                            <p>{Strings.homeContent}</p>
                        </div>
                        <div class="col-lg-8 rightContainer">
                            <img src={buildingImg} class="img-fluid image" alt="Placeholder" />
                        </div>
                    </div>
                    <div className="searchContainer">
                        <p className="title">{Strings.vatChecker}</p>
                        <div class="input-group mb-3 inputContainer">
                            <input type="text" class="form-control inputBox" onKeyPress={this.handleKeyDown} onChange={(text) => this.setVatNumber(text)} placeholder={Strings.inputPlaceholder} aria-label={Strings.inputPlaceholder} aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button className="inputButton" onClick={() => this.sendRequest()}>{Strings.check}</button>
                            </div>
                        </div>
                        {this.state.callbackData && <MessageBox callbackData={this.state.callbackData} />}
                    </div>
                </div>

            </div>
        );
    }
}

export { Home };
