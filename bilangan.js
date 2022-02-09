const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/decimal", (req,res) => {

    let decimal = Number(req.body.decimal)

    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let hex = decimal.toString(16)

    let response = {
        Decimal : decimal,
        result : {
            Biner       : biner,
            Octal       : octal,
            Hexadecimal : hex
        }
    }
    res.json(response)
})

app.post("/biner", (req,res) =>{

    let biner = Number(req.body.biner)

    let decimal = parseInt(biner,2)
    let octal = parseInt(biner, 2).toString(8)
    let hex = parseInt(biner, 2).toString(16)

    let response = {
        Biner : biner,
        result : {
            Decimal         : decimal,
            Octal           : octal,
            Hexadecimal     : hex
        }
    }
    res.json(response)
})

app.post("/octal", (req,res) =>{

    let octal = Number(req.body.octal)

    let decimal = parseInt(octal,8)
    let binary = parseInt(octal, 8).toString(2)
    let hex = parseInt(octal, 8).toString(16)

    let response = {
        Octal : octal,
        result : {
            Decimal     : decimal,
            Binary      : binary,
            Hexadecimal : hex
        }
    }
    res.json(response)
})

app.post("/hexadecimal", (req,res) => {

    let hexadecimal = Number(req.body.hexadecimal)

    let decimal = parseInt(hexadecimal,16)
    let binary = parseInt(hexadecimal, 16).toString(2)
    let octal = parseInt(hexadecimal, 16).toString(8)

    let response = {
        Hexadecimal : hexadecimal,
        result : {
            Decimal : decimal,
            Octal   : octal,
            Binary  : binary
        }
    }
    res.json(response)
})

const port = 8070;
app.listen(port, () => console.log (`App running ${port}`))