# Lab 6 - ETL Pipeline

For this lab I created an ETL pipeline function that takes in the data from the API that is being called then formats it and inputs it into my database. Overall, i didnt have many issues except for the time it took to input the initial data for the 300 documents. 

First I created the ETL function to format the data
Then I ran 100 calls for each API and inputed the data to mongo
Then I set it up so my frontend calls the new collection of data

The 3 new APIs I used:
Polygon: https://polygon.io/docs/stocks/getting-started
Yahoo Finance 2: https://rapidapi.com/sparior/api/yahoo-finance15
12 Data: https://rapidapi.com/twelvedata/api/twelve-data1
