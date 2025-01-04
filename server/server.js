const express = require("express")
const cors = require("cors")
const corsOptions = require('./config/corsOptions')
const axios = require('axios')

const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')

//establish express app and dependancies
const app = express()

//use request logger middleware
app.use(logger)

//use cors
app.use(cors(corsOptions));

//express middleware
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//errorhandler middleware
app.use(errorHandler)

//routes
app.use('/feed', require('./routes/feed'))

app.listen(3000, () => {
    console.log("app listening on port 3000")
})