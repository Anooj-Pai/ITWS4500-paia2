const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const cors = require('cors');
const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://paia2:Asdf5588@lab.jb0ilmh.mongodb.net/test';
const client = new mongo(url, { useUnifiedTopology: true });
const database = client.db("Lab5DB");
const collection = database.collection("Stock_Data");
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

app.get('/winners', (req, res) => {
    var url = `https://www.alphavantage.co/query?function=TOURNAMENT_PORTFOLIO&season=2021-09&apikey=${process.env.REACT_APP_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
})


app.get('/list', (req, res) => {
    let fs = require('fs');
    fs.readFile('data/tickers.txt', 'utf8', function (err, data) {
        res.send({ 'tickers': data });
    });
})

app.post('/writelist', (req, res) => {
    let fs = require('fs');
    res.send("Written");
})

app.put('/editlist', (req, res) => {
    res.send("Edited");
})

app.delete('/deletelist', (req, res) => {
    res.send("Deleted");
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


app.listen(3000, () => {
    console.log('Listening on *:3000')
})