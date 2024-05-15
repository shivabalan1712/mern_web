const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyparser.json())
const port ="5000"

app.get("/home",(req,res)=>{
    console.log("received")
    res.send("hi! , this is home")
})

app.post("/validate",(req,res)=>{
    try {
        const name = req.body.name
        const pwd = req.body.pwd
        console.log(name+""+pwd)
        res.json({res:"validated"})
    } catch (error) {
        console.log("Error Occured")
    }
})

app.listen(port,()=>{
    console.log("Append listen on port" + port)
})