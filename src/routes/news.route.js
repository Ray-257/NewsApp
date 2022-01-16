const express = require('express');
const newsService = require('../services/news.service');
const router = express.Router();


router.get('/latestNews',async (req,res,next)=> {
try {
  const newsList = await newsService.getLatestNews(req.query);
  res.status(200).send(newsList)
} catch (error) {
  res.status(400).send({error:error.message});
}
})
module.exports = router;