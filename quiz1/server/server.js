const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.get('/schools/:id', (req, res) => {
    var id = req.params.id;
    var url = `https://universities.hipolabs.com/search?name=${id}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
})

app.get('/schools', (req, res) => {
    var url = `https://universities.hipolabs.com/search?name=Rensselaer`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
})


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

app.get('/schools/:id', (req, res) => {
    var id = req.params.id;
    var url = `https://universities.hipolabs.com/search?name=${id}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
})

app.get('/schools', (req, res) => {
    var url = `https://universities.hipolabs.com/search?name=Rensselaer`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
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


app.listen(3000, () => {
    console.log('Listening on *:3000')
})