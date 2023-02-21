# Lab 3 - WealthX

This site is made to track and find information about all of your favorite stocks. The front end is created with vite react and i am running a nodejs and express back end. 


[https://paia2.eastus.cloudapp.azure.com/ITWS4500-S23-paia2/Lab3/client/dist/index.html](https://paia2.eastus.cloudapp.azure.com/ITWS4500-S23-paia2/Lab3/client/dist/index.html)

or

Go to my home page and click Lab 3:

[https://paia2.eastus.cloudapp.azure.com/ITWS4500-S23-paia2](https://paia2.eastus.cloudapp.azure.com/ITWS4500-S23-paia2)



## Tech Stack

**Client:** React, Vite

**Server:** Node, Express

# Issues
* API Call to internal API was throwing 504 due to HTTP request instead of HTTPS
* Front End would not build on VM due to the plotly package
* Had to find a way to have my back end server running to make site work
## API Reference

#### Get all stock data

```bash
  /fin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None`    | `none` | **Not Required**. Your API key |



#### Get certain stock data

```bash
  /fin/${ticker}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ticker`  | `string` | **Required**. Stock Ticker        |



#### Get ticker list

```bash
  /list
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None`    | `none`   | **Not Required**. Your API key |



#### Post ticker list

```bash
  /writelist
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None`    | `none`   | **Not Required**. Your API key |


#### Put ticker list

```bash
  /editlist
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None`    | `string` | **Not Required**. Your API key |


#### Delete ticker list

```bash
  /deletelist
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None`    | `string` | **Not Required**. Your API key |



## Acknowledgements

 - [Alphavantage API](https://www.alphavantage.co/documentation/)
 - [Apex Charts API](https://apexcharts.com/docs/react-charts/)

## Run Locally

To run this project:

```bash
cd client
```

```bash
npm i && npm run dev
```

```bash
cd ../server
```

```bash
node server.js
```





