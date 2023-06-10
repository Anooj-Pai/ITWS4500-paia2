import { useState } from 'react'

function Quiz() {

    const [school, setSchool] = useState('')
    const [domain, setDomain] = useState('')
    const [state, setState] = useState('')
    const [webPage, setWebPage] = useState('')
    const [country, setCountry] = useState('')
    const [code, setCode] = useState('')


    const click = () => {
        getData(school);
    };

    const change = (e: any) => {
        setSchool(e.target.value);
    };

    function getData(school: string) {

        if (school === '') {
            alert('Please enter a stock symbol')
            return
        }

        fetch(`http://universities.hipolabs.com/search?name=${school}`).then(
            response => response.json()
        ).then(
            data => {
                if (data.length == 0) {
                    fetch(`http://universities.hipolabs.com/search?name=Rensselaer`).then(
                        response => response.json()
                    ).then(
                        data => {
                            setSchool(data[0]['name'])
                            setDomain(data[0]['domains'][0])
                            setState(data[0]['state-province'])
                            setWebPage(data[0]['web_pages'][0])
                            setCountry(data[0]['country'])
                            setCode(data[0]['alpha_two_code'])
                        })
                } else {
                    setDomain(data[0]['domains'][0])
                    setState(data[0]['state-province'])
                    setWebPage(data[0]['web_pages'][0])
                    setCountry(data[0]['country'])
                    setCode(data[0]['alpha_two_code'])
                }
            }
        )
    }


    return (
        <div className='stock-details'>
            <h1>{school}</h1>
            <input id='tickerInput' type='text' placeholder='Enter School' onChange={change} />
            <button className='btn' onClick={click}>Get School Data</button>
            <div className='quiz'>
                <h3 className='details'>Domain: {domain}</h3>
                <h3 className='details'>State: {state}</h3>
                <h3 className='details'>Web Page: {webPage}</h3>
                <h3 className='details'>Country: {country}</h3>
                <h3 className='details'>Code: {code}</h3>
            </div>
        </div>
    )
}

export default Quiz
