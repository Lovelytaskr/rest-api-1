//inisialisasi aplikasi menggunakan express js
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//ENDPOINT

app.post("/bmi", (req,res) => {
    const tb = req.body.tinggi;
    const bb = req.body.berat;
    var a = "Kekurangan berat badan";
    var b = "Normal (Ideal)";
    var c = "Kelebihan berat badan";
    var d = "Kegemukan (Obesitas)";

    const hasil = bb/tb**2;

    if (hasil <= 18.5) {
        res.send({
            tinggi: tb,
            berat: bb,
            bmi: hasil,
            status: a,
        })
    }else if (hasil > 18.5 && hasil <= 24.9) {
        res.send({
            tinggi: tb,
            berat: bb,
            bmi: hasil,
            status: b,
        })
    }else if (hasil > 24.9 && hasil <= 29.9) {
        res.send({
            tinggi: tb,
            berat: bb,
            bmi: hasil,
            status: c,
        })
    }else{
        res.send({
            tinggi: tb,
            berat: bb,
            bmi: hasil,
            status: d,
        })
    }
})

const port = 8008;
app.listen(port, () => console.log (`App running ${port}`))