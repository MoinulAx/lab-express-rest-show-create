const express = require("express")
const app = express()
const logController = require("./controllers/logController")

app.use(express.json())
app.get("/",(req,res) =>{
    res.send("welcome to the captain's log")
})

app.use('/logs' , logController)



module.exports = app


