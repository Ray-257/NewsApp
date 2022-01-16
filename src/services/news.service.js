const axios = require('axios');
const {newsAPI,newsAPIKey} = require('./config.service')
const url = require('url');
const moment = require("moment")

const getLatestNews = async(queryParams={}) => {
  // last 20days news 
  const startDate = moment().subtract(20,'days').format('YYYY-MM-DD');
  const params = new url.URLSearchParams({
    from : startDate,
    sortBy:queryParams.sortBy,
    apiKey:newsAPIKey,
    q:queryParams.seachKey,
    language: queryParams.language || 'en',
  });
return new Promise((resolve,reject) => {
  axios.get(`${newsAPI}?${params}`).then(res => {
    resolve(res.data)
   })
   .catch(err => {

     reject(err.response.data)
   })
})
}

module.exports = {
  getLatestNews
}