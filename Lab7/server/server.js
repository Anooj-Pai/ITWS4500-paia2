const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const cors = require('cors');
const axios = require('axios');
const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://paia2:Asdf5588@lab.jb0ilmh.mongodb.net/test';
const client = new mongo(url, { useUnifiedTopology: true });
const database = client.db("Lab5DB");
const collection = database.collection("ETL-Data");
client.connect();

app.use(cors({
    origin: 'http://localhost:5173',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.get('/fin', (req, res) => {
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&aoutputsize=full&apikey=${process.env.REACT_APP_KEY}}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
})

app.get('/fin/:id', (req, res) => {
    var id = req.params.id;
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${id}&aoutputsize=full&apikey=${process.env.REACT_APP_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
})

app.get('/db', (req, res) => {
    collection.find({}).toArray().then((ans) => {
        res.send(ans);
    });
})

app.post('/db', (req, res) => {
    let data = req.body;
    console.log(data);
    const document = {
        data: data,
    };
    collection.insertOne(document);
})

app.put('/db', (req, res) => {
    let data = req.body;
    collection.updateMany({}, { $set: data });
})

app.delete('/db', (req, res) => {
    collection.deleteMany({});
})

app.get('/db/:id', async (req, res) => {
    var id = req.params.id;
    id = parseInt(id);
    let data = await collection.findOne({ 'index': id });
    res.send(data);
})

app.get('/stock/:id', async (req, res) => {
    var id = req.params.id;
    let data = await collection.findOne({ 'ticker': id });
    res.send(data);
})

app.put('/db/:id', (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    let data = req.body;
    let document = {
        data: data,
    };
    collection.updateOne({ 'index': `${id}` }, { $set: document });
})

app.delete('/db/:id', (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    collection.deleteOne({ index: id });
})

app.get('/polygon/:id', (req, res) => {
    let id = req.params.id;
    fetch(`https://api.polygon.io/v2/aggs/ticker/${id}/range/1/day/2010-01-01/2023-04-01?adjusted=true&sort=asc&limit=120&apiKey=9oUkZBDjtTHdicsCUyirz44EinIu6dfZ`)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
})

app.get('/twelve/:id', (req, res) => {
    let id = req.params.id;
    const options = {
        method: 'GET',
        url: 'https://twelve-data1.p.rapidapi.com/time_series',
        params: { symbol: id, interval: '1day', outputsize: '30', format: 'json' },
        headers: {
            'X-RapidAPI-Key': '4aa00e603fmsh2369336ba6baadap16aaaejsn8d09f4046666',
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        etlPipeline(id, response.data.values);
    }).catch(function (error) {
        console.error(error);
    });

})

app.get('/YH/:id', (req, res) => {
    let id = req.params.id;
    const options = {
        method: 'GET',
        url: `https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/${id}/15m`,
        params: { diffandsplits: 'false' },
        headers: {
            'X-RapidAPI-Key': '4aa00e603fmsh2369336ba6baadap16aaaejsn8d09f4046666',
            'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        etlPipeline(id, response.data.items);
    }).catch(function (error) {
        console.error(error);
    });
})


async function etlPipeline(ticker, data) {
    let obj = {
        'ticker': ticker, 'data': data
    }
    await collection.insertOne(obj, (err, res) => {
        if (err) throw err;
        console.log('inserted');
    })
}

app.listen(3000, () => {
    console.log('Listening on *:3000')
})