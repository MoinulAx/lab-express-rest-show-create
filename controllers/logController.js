const express = require("express")

const logController = express.Router()
const data = require("../models/models")

logController.get("/", (req, res) =>{
    res.json(data)

})

logController.post("/", (req,res) => {
    data.push(req.body)
    res.json(data[data.length -1])
}) 


logController.get("/:id", (req,res) =>{
    const {id} = req.params
    if(data[id]){
        res.json(data[+id])
    }else{
        res.redirect("/")

    }
})

logController.delete('/:id', (req,res) =>{
    
    const {id} = req.params
    if(data[id]){
        const deletedLog = data.splice(+id, 1)
        res.status(200).json(deletedLog)
    }else{
        res.status(404).json({error:"log not found"})
    }
    
})
logController.put("/:id", (req,res) =>{
    const { id } = req.params
    
    data.splice(+id, 1, req.body)
    if(data[id]){
        res.status(200).json(data[+id])
    }else{
        res.status(404).json({error:"id out of bounds"})
    }


})


module.exports = logController