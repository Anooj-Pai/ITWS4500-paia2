This lab went pretty smoothly, most of the code for the API was taken from my lab 4 of last semester but the geolocation was new. Overall it was not difficult but sometimes
when the page is reloaded it takes a while for the data to come because of the geolocation loading time. Other than this everything works well. For my creativity I wanted
to make the background change with the weather. For this I added images for each weather type and depending on the icon for the weather given by the API the background changes.
I wanted the main data panel in the center to stand out so I blured the rest of the screen and to make sure the text was readable I added a black overlay on the panel.

Issues:
Takes long to load


API's Looked At:

Open Weather Map - This API returns a json array of data when called. There are many sections including the body, headers, status, and url. These are all relevant fields because
they give the user the information they need to use the data. When you parse the json data you get a new object with all of the data about the place and weather that is requested.
You parse this like a 2d array and use & for the options in the call.

IP API - This API gives you the data based on the ip that is passed into it. It returns a JSON object that includes: query (IP), status, country, region, city, zip, lat, lon,
timezone, and more. It is very conveniant for getting location data because the geolocation built into JS is slow and can be a pain to use.

Google Maps - This API is used to create maps and access the data that google has about locations. Instead of getting a JSON object for this API you are able to create maps and use the 
in built tools that Google uses to make their maps and integrate it into your website. Instead of using a GET request you call the maps js script that includes the data in it.