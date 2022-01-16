
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const createError = require('http-errors')
const path = require('path');
const cors = require('cors')

const newsRouter = require('./src/routes/news.route')

const app = express()
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
app.use(logger('dev'));
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'frontend/build')))
app.use(cors())
const PORT = process.env.PORT || 5000;
app.use('/api/news',newsRouter);

app.get('/',(req,res) => {
  res.send()
})

// catch 404 error 
app.use((req,res,next) => {
  next(createError(404))
})
app.listen(PORT,() => {
  console.log('Server started ...')
})