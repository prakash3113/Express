const path = require('path')
const express = require('express')
const getController = (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
}
module.exports = getController
