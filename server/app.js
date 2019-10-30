const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes/index')
const mongoose = require('mongoose')

// DB연결
let url = "mongodb://localhost:27017/YO"
mongoose.connect(url, {useNewUrlParser: true})

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', api);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));