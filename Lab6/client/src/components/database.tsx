import { useState } from "react"
import ReactJson from 'react-json-view'

function Database() {

    async function getData(docNum: string) {
        setIsData(true)
        if (docNum === '' || docNum === '0') {
            const response = await fetch(`https://paia2.eastus.cloudapp.azure.com/node/db`)
            const data = await response.json()
            setData(data)
        }
        else {
            const response = await fetch(`https://paia2.eastus.cloudapp.azure.com/node/db/${docNum}}`)
            const data = await response.json()
            setData(data)
        }
    }

    async function postData(doc: string, docNum: string) {
        if (docNum === '' || docNum === '0') {
            alert('Please enter a document number')
            return
        }
        const response = await fetch(`https://paia2.eastus.cloudapp.azure.com/node/db`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ doc })
        })
        console.log('Data Inputed')
    }

    async function putData(docNum: string, doc: string) {
        if (docNum === '' || docNum === '0') {
            alert('Please enter a document number')
            return
        }
        const response = await fetch(`https://paia2.eastus.cloudapp.azure.com/node/db/${docNum}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ doc })
        })
        const data = await response.json()
        setDoc('Data Updated')
        console.log('Data Updated')
    }

    async function deleteData(docNum: string) {
        if (docNum === '') {
            const response = await fetch(`https://paia2.eastus.cloudapp.azure.com/node/db`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setDoc('All Data Deleted')
            return
        }
        const response = await fetch(`https://paia2.eastus.cloudapp.azure.com/node/db/${docNum}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        setDoc('Data Deleted')
        console.log('Data Deleted')
    }

    const handleChange = (event: any) => {
        setDoc(event.target.value);
    };

    const handleDocNumChange = (event: any) => {
        setDocNum(event.target.value);
    };


    const [docNum, setDocNum] = useState('')
    const [doc, setDoc] = useState('')
    const [data, setData] = useState([])
    const [isData, setIsData] = useState(false)
    const [addData, setAddData] = useState(false)

    return (
        <div className="database">
            <h1>Database</h1>
            <div style={{ paddingBottom: '5px' }}>
                <input className="input" type="text" name="documentNum" id="documentNum" placeholder="Enter Document Number" value={docNum} onChange={handleDocNumChange} />
            </div>
            <div style={{ paddingBottom: '2px' }}>
                {isData ? <ReactJson src={data} collapsed={true} theme='summerfruit:inverted' style={{ margin: "5px" }} /> : null}
                {addData ? <textarea name="document" id="document" cols={30} rows={10} placeholder='Enter data here' defaultValue={doc} onChange={handleChange} /> : null}
            </div>
            <button className="btn" onClick={() => { setAddData(!addData) }}>Add Data</button>
            <button className="btn" onClick={() => { getData(docNum) }}>GET</button>
            <button className="btn" onClick={() => { postData(doc, docNum) }}>POST</button>
            <button className="btn" onClick={() => { putData(docNum, doc) }}>PUT</button>
            <button className="btn" onClick={() => { deleteData(docNum) }}>DELETE</button>
            {isData ? <button className="btn" onClick={() => { setIsData(!isData) }}>Hide Data</button> : null}
        </div>
    )
}

export default Database
