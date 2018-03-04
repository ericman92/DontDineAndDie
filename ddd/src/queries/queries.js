const axios = require('axios');

const URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json'
const cuisineURL = `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$select=count(*),camis,dba,violation_description,street,cuisine_description,boro,zipcode&$group=camis,dba,violation_description,street,cuisine_description,boro,zipcode`

const getCuisine = (cuisine) => {
    axios
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
                console.log(response);
                return response
            })
            .catch((err) => console.log('error getting byZip:', err));
    }
}

const getByDBA = (name) => {
    axios
        .get(cuisineURL + `&dba=${name}&$limit=20&$order=count(*)DESC`)
        .then((response) => {
            console.log(response);
            return response
        })
        .catch((err) => console.log(err))
}

export default {
    getByZip,
    getByDBA,
    getCuisine
}

//https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$select=count(*),camis,d
//ba,violation_description,street,cuisine_description,boro,zipcode&$group=camis,
//dba,violation_description,street,cuisine_description,boro,zipcode&$WHERE=${cui
//sine}&$limit=10&$order=count(*)DESC
