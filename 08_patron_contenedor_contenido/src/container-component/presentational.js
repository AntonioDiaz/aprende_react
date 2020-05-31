import React, {Component} from 'react';

class BitCoinPrice extends Component {

    _renderCurrencies() {
        const { bpi } = this.props
        const currencies = Object.keys(bpi)
        return currencies.map (currency => 
                <div key={currency}>
                    1 BTC is {bpi[currency].rate} _ <span>{currency}</span>
                </div>
        )
    }

    render() {
        return (
            <div>
                <h4>Bitcoins Price Index</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default BitCoinPrice
