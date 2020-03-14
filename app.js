const request = require ('request');

const url = 'https://api.darksky.net/forecast/8d7591339496a48a975f330fe36ed533/37.8267,-122.4233?units=si'

request( {url: url, json: true} , (error, response) => {
    //console.log(response.body.currently);
    console.log(`${response.body.daily.data[0].summary}It is currently ${response.body.currently.temperature} and Probability is ${response.body.currently.precipProbability}`)
    // const data = JSON.parse(response.body);
    // console.log(data.currently);
    //console.log(response);
})