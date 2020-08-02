import React from 'react';



const roundCurrencyRate = (rate) =>  {
    let n = Math.round(parseFloat (rate) * 100) / 100
    return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
    

const _renderCurrencies = (bpi) => {
    return Object.keys(bpi).map (currency => 
        <div className="DivCurrency" key={currency}>
            1 BTC = {roundCurrencyRate(bpi[currency].rate_float)} <span dangerouslySetInnerHTML={{__html:bpi[currency].symbol}}></span>
        </div>
    )
}

const BitCoinPrice = ({bpi}) => {
    return (
        <div>
            <h4>Bitcoins Price Index</h4>
            {_renderCurrencies(bpi)}
        </div>
    )
}

export default BitCoinPrice
