import { useState } from 'react'
import Chart from 'react-apexcharts'

function Stockdetails() {

    const [getXData, setXData] = useState([])
    const [getYData, setYData] = useState([])
    const [open, setOpen] = useState();
    const [high, setHigh] = useState();
    const [low, setLow] = useState();
    const [close, setClose] = useState();

    const [ticker, setTicker] = useState('Stock Details')

    const click = () => {
        getData(ticker);
    };

    const change = (e: any) => {
        setTicker(e.target.value);
    };


    let xData: any = [];
    let yData: any = [];
    function getData(ticker: string) {

        if (ticker === '') {
            alert('Please enter a stock symbol')
            return
        }

        fetch(`https://paia2.eastus.cloudapp.azure.com/node/stock/${ticker}`).then(
            response => response.json()
        ).then(
            data => {
                if (!data.data) {
                    alert('Please enter a valid stock symbol')
                    return
                }
                for (let key = 0; key < data.data.length; key++) {
                    var date = new Date(data.data[key].t);
                    xData.push(date.toLocaleDateString("en-US"))
                    yData.push(data.data[key].o)
                    setOpen(data.data[key].o)
                    setHigh(data.data[key].h)
                    setLow(data.data[key].l)
                    setClose(data.data[key].c)
                }
                setXData(xData)
                setYData(yData)
            }
        )
    }

    const stateStock = {
        options: {
            chart: {
                id: ticker
            },
            xaxis: {
                categories: getXData
            },
            colors: ['#F7F2EF']
        },
        series: [
            {
                name: ticker,
                data: getYData
            }
        ]
    };

    return (
        <div className='stock-details'>
            <h1>{ticker}</h1>
            <input id='tickerInput' type='text' placeholder='Enter stock symbol' onChange={change} />
            <button className='btn' onClick={click}>Get Stock Data</button>
            <div className='stock-stats'>
                <h3 className='details'>Open: {open}</h3>
                <h3 className='details'>High: {high}</h3>
                <h3 className='details'>Low: {low}</h3>
                <h3 className='details'>Close: {close}</h3>
            </div>

            <Chart className="plot"
                options={stateStock.options}
                series={stateStock.series}
                type="line"
            />
        </div>
    )
}

export default Stockdetails
