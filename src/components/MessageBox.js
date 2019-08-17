import React, { Component } from 'react';
import '../sass/MessageBox.sass';
import { Strings } from '../util/Strings';

class MessageBox extends Component {
    render() {
        const { valid, trader_name, trader_address } = this.props.callbackData
        return (
            <div className={"container-fluid contentContainer " + (valid ? "valid" : "invalid")}>
                <h6 class="text-center titleStyle">{(valid ? Strings.valid : Strings.invalid)}</h6>
                {valid && <>
                    <span><b>{Strings.traderName}</b>{trader_name}</span>
                    <span><b>{Strings.traderAddress}</b>{trader_address}</span>
                </>
                }
            </div>
        )
    }
}

export { MessageBox }