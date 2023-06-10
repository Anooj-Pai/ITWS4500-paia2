# Lab 5 - WealthX with Database

This site connects to my mongo database and interacts with the data. You can get all of the documents, one of them, and edit them as well. I didn't have many issues with this lab
other than inputing the data initially becasue of the API limit. After all of the data was in, the rest of the lab went smoothly. I was originally going to just display the data
in the text area but I found this great package on npm that let you format and display the json so I decided to use that instead. I think it came out quite well and enjoyed this lab. It is definately going to help me in the future with working with Mongo. I feel that the json viewer definately adds to the creativity along side the little things such as, my custom buttons, the ability to show and hide the data input box depending on is the protocall requires it, and the input box styling. I also changed my stock charts to read the data from my database instead of from the API I was using.

[https://paia2.eastus.cloudapp.azure.com/ITWS4500-S23-paia2/Lab5/client/dist/index.html](https://paia2.eastus.cloudapp.azure.com/ITWS4500-S23-paia2/Lab5/client/dist/index.html)


# Issues
* Inputing data was limited to 5 calls per minute

## API Reference

#### Get all database data

```bash
  /db
```

#### Get certain database data

```bash
  /db/${id}
```

All of the post, put and, delete protocalls have the same endpoints