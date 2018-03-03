const axios = require('axios');

const URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json'

const getTopTen = () => {
    axios.get(`${URL}$select=count(*)dba&group`)
}

