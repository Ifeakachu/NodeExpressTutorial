// import express from "express"
const express =require("express")
const app = express()

app.use(express.static("./methods-public"))

app.listen(5300, () =>{
    console.log("Active")
})
