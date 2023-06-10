import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'


function Portfolio() {
    const [getspyXData, setspyXData] = useState([])
    const [getspyYData, setspyYData] = useState([])
    const [getDowXData, setDowXData] = useState([])
    const [getDowYData, setDowYData] = useState([])

    let spyXData: any = [];
    let spyYData: any = [];
    let dowXData: any = [];
    let dowYData: any = [];


    let spy = 'SPY';
    let dow = 'DOW';

    useEffect(() => {
        fetch(`https://paia2.eastus.cloudapp.azure.com/node/fin/${spy}`).then(
            response => response.json()
        ).then(
            data => {
                for (let key in data['Time Series (Daily)']) {
                    spyXData.push(key)
                    spyYData.push(data['Time Series (Daily)'][key]['1. open'])
                }

                setspyXData(spyXData)
                setspyYData(spyYData)
            }
        )
    }, [])


    useEffect(() => {
        fetch(`https://paia2.eastus.cloudapp.azure.com/node/fin/${dow}`).then(
            response => response.json()
        ).then(
            data => {
                for (let key in data['Time Series (Daily)']) {
                    dowXData.push(key)
                    dowYData.push(data['Time Series (Daily)'][key]['1. open'])
                }
                setDowXData(dowXData)
                setDowYData(dowYData)
            }
        )
    }, [])

    const stateSPY = {
        options: {
            chart: {
                id: "SPY"
            },
            xaxis: {
                categories: getspyXData.reverse()
            },
            colors: ['#F7F2EF']
        },
        series: [
            {
                name: "SPY",
                data: getspyYData.reverse()
            }
        ]
    };

    const stateDow = {
        options: {
            chart: {
                id: "Dow"
            },
            xaxis: {
                categories: getDowXData.reverse()
            },
            colors: ['#F7F2EF']
        },
        series: [
            {
                name: "Dow",
                data: getDowYData.reverse()
            }
        ]
    };




    return (
        <div className='portfolio'>
            <h1 id='market'>Market Indexes</h1>
            <div className='market-names'>
                <p>SPY</p>
                <p>Dow</p>
            </div>
            <Chart className="plot"
                options={stateSPY.options}
                series={stateSPY.series}
                type="line"
            />

            <Chart className="plot"
                options={stateDow.options}
                series={stateDow.series}
                type="line"
            />
        </div>
    )
}


export default Portfolio
