const request = require ('request');
const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')
geocode ('Boston', (error,data) => {
    console.log('Error : ', error);
    console.log('Data : ', data);
})

forecast (-75.7099, 44.1545 , (error, data) => {
    console.log ('Error', error);
    console.log ('Data', data);
})
 




















//const url = 'https://api.darksky.net/forecast/8d7591339496a48a975f330fe36ed533/37.8267,-122.4233?units=si'
// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxwb25zYSIsImEiOiJjazdzMTJ4ZnUwYXp2M2VwZ2ZyZTF4am9zIn0.WGSzXr_TK3f3mViLT3om_g'
// request( {url: url, json: true} , (error, response) => {
//     //console.log(response.body.features[0].center);
    
//     if (error){
//         console.log('Unable To Connect To Weather Service');
//     }else if (response.body.error){
//         console.log('Unable to find the given location');
//     } else{
//         const lattitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(lattitude);
//         console.log(longitude);
//         console.log(error);
//     }
    
// })

    //console.log(response.body.currently);
    //console.log(`${response.body.daily.data[0].summary}It is currently ${response.body.currently.temperature} and Probability is ${response.body.currently.precipProbability}`)
    // const data = JSON.parse(response.body);
    // console.log(data.currently);
    //console.log(response);