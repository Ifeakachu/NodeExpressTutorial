// import express from "express"
const express = require('express')
const app = express()
app.use(express.static('./public'))



app.listen(5600, () =>{
    console.log("feel like working")
})