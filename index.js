const express = require("express")
const app = express()

app.get("/",function(req,res){
    const a=req.query.n
    res.send(a.toString())
})

app.listen(3000)