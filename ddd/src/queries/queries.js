const axios = require('axios');
// const URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json'
const cuisineURL = `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$select=count(*),camis,dba,violation_description,street,cuisine_description,boro,zipcode&$group=camis,dba,violation_description,street,cuisine_description,boro,zipcode`

const getCuisine = (cuisine) => {
    return axios
        .get(cuisineURL + `&cuisine_description=${cuisine}&$limit=20&$order=count(*)DESC`)
        .then((response) => {
            console.log(response);
            return response
        })
        .catch((err) => console.log(err))
}

const getByZip = (zip) => {
    if (zip.length >= 5) {
        return axios
            .get(cuisineURL + `&zipcode=${zip}&$limit=20&$order=count(*)DESC`)
            .then((response) => {
                // console.log(response);
                return response
            })
            .catch((err) => console.log('error getting byZip:', err));
    }
}

const getByDBA = (name) => {
    return axios
        .get(cuisineURL + `&dba=${name}&$limit=20&$order=count(*)DESC`)
        .then((response) => {
            console.log(response);
            return response
        })
        .catch((err) => console.log(err))
}

const getByBoro = (boro) => {
    if(boro.length >= 4) {
        return axios.get(cuisineURL+`&boro=${boro}&$limit=20&$order=count(*)DESC`)
        .then((response) => {
            return response
        })
        .catch((err) => console.log(err))
    }
}
// search with multiple queries
// const getByAll = (cuisine, zip, boro, dba) => {
//     return axios
//     .get(`https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$select=count(*),dba,grade,street,boro,violation_description&$group=dba,grade,street,boro,violation_description&cuisine_description=${cuisine}&zipcode=${zip}&boro=${boro}&dba=${dba}&$limit=20`)
//     .then((response) => {
//         return response
//     })
// }

// top ten most complaints in nyc
// const getTopTen = () => {
//     return axios
//     .get(`https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$select=count(*),dba,camis&$group=dba,camis&$limit=10&$order=count(*)DESC`)
//     .then((response) => {

//     })
// }

export default {
    getByZip,
    getByDBA,
    getCuisine,
    getByBoro
}

//https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$select=count(*),camis,d
//ba,violation_description,street,cuisine_description,boro,zipcode&$group=camis,
//dba,violation_description,street,cuisine_description,boro,zipcode&$WHERE=${cui
//sine}&$limit=10&$order=count(*)DESC
//https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$select=count(*),dba,grade,street,boro,violation_description&$group=dba,grade,street,boro,violation_description&cuisine_description=${cuisine}&zipcode=${zip}&boro=${boro}&dba=${dba}&$limit=20