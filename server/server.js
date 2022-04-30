const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config()
const blogRoute = require('./routes/blog')

const app = express();

//connect cloud database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: false
}).then(()=>console.log("เชื่อมต่อฐานข้อมูลเรียบร้อย"))
.catch((err)=>console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
// app.get("*",(req, res) => {
//     res.json({
//         data:"message form server"
//     })
// })
app.use('/api',blogRoute)

const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server in port ${port}`))