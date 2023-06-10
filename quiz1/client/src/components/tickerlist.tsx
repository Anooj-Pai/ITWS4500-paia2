import { useState, useEffect } from 'react'

function TickerList() {

    const [tickerVal, setTickers] = useState('')

    useEffect(() => {
        fetch('https://paia2.eastus.cloudapp.azure.com/node/list').then
            (response => response.json()).then(data => {
                setTickers(data['tickers'])
            })
    }, [])

    return (
        <div className='ticker-list'>
            <h1>Ticker List</h1>
            <textarea name="tickers" id="tickers" cols={30} rows={10} defaultValue={tickerVal} contentEditable={'true'}></textarea>
        </div >
    )
}

export default TickerList
