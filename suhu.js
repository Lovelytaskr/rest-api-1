//inisialisasi aplikasi menggunakan express js
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//ENDPOINT

app.get("/convert", (req,res) => {
    res.send({
        message: "Berhasil melakukan pemanggilan get",
        data: {
            description:
            "Endpoint ini untuk menampilkan data suhu",
        }
    })
})

app.get("/convert/celcius/:suhu", (req,res) => {
    res.send({
        celcius: req.params.suhu,
        result: {
            reamur: 4/5 * req.params.suhu,
            farenheit: 9/5 * req.params.suhu + 32,
            kelvin: 273 + parseInt(req.params.suhu),
        }
    })
})

app.get("/convert/reamur/:suhu", (req,res) => {
    res.send({
        reamur: req.params.suhu,
        result: {
            celcius: 5/4 * req.params.suhu,
            farenheit: 9/4 * req.params.suhu + 32,
            kelvin: 5/4 * req.params.suhu + 273,
        }
    })
})

app.get("/convert/kelvin/:suhu", (req,res) => {
    res.send({
        kelvin: req.params.suhu,
        result: {
            celcius: parseInt(req.params.suhu) - 273,
            farenheit: 9/5 * (parseInt(req.params.suhu) - 273) + 32,
            reamur: 4/5 * (parseInt(req.params.suhu) - 273),
        }
    })
})

app.get("/convert/fahrenheit/:suhu", (req,res) => {
    res.send({
        fahrenheit: req.params.suhu,
        result: {
            celcius: 5/9 * (req.params.suhu - 32),
            reamur: 4/9 * (req.params.suhu - 32),
            kelvin: 5/9 * (req.params.suhu - 32) + 273,
        }
    })
})

const port = 8000;
app.listen(port, () => console.log (`App running ${port}`))