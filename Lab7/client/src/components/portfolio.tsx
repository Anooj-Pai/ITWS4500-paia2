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

    useEffect(() => {
        fetch(`https://paia2.eastus.cloudapp.azure.com/node/stock/TSLA`).then(
            response => response.json()
        ).then(
            data => {
                for (let key = 0; key < data.data.length; key++) {
                    var date = new Date(data.data[key].t);
                    spyXData.push(date.toLocaleDateString("en-US"))
                    spyYData.push(data.data[key].o)
                }
                setspyXData(spyXData)
                setspyYData(spyYData)
            }
        )
    }, [])


    useEffect(() => {
        fetch(`https://paia2.eastus.cloudapp.azure.com/node/stock/AAPL`).then(
            response => response.json()
        ).then(
            data => {
                for (let key = 0; key < data.data.length; key++) {
                    var date = new Date(data.data[key].t);
                    dowXData.push(date.toLocaleDateString("en-US"))
                    dowYData.push(data.data[key].o)
                }

                setDowXData(dowXData)
                setDowYData(dowYData)
            }
        )
    }, [])

    const stateSPY = {
        options: {
            chart: {
                id: "TSLA"
            },
            xaxis: {
                categories: getspyXData
            },
            colors: ['#F7F2EF']
        },
        series: [
            {
                name: "TSLA",
                data: getspyYData
            }
        ]
    };

    const stateDow = {
        options: {
            chart: {
                id: "AAPL"
            },
            xaxis: {
                categories: getDowXData
            },
            colors: ['#F7F2EF']
        },
        series: [
            {
                name: "AAPL",
                data: getDowYData
            }
        ]
    };




    return (
        <div className='portfolio'>
            <h1 id='market'>Market Indexes</h1>
            <div className='market-names'>
                <p>TSLA</p>
                <p>AAPL</p>
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
