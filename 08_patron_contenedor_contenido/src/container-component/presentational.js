import React from 'react';

const _renderCurrencies = (bpi) => {
    return Object.keys(bpi).map (currency => 
        <li key={currency}>
            1 BTC is {bpi[currency].rate} _ <span>{currency}</span>
        </li>
    )
}

const BitCoinPrice = ({bpi}) => {
    return (
        <div>
            <h4>Bitcoins Price Index</h4>
            <ul>{_renderCurrencies(bpi)}</ul>
        </div>
    )
}

export default BitCoinPrice
