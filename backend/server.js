const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const mysql = require('mysql')
 
const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    database: "felveteli",
    user: "root",
    password: ""
});



app.get('tagozatok', (req, res) => {
    const sqlParancsok = "SELECT * FROM tagozatok ORDER BY agazat";
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})

//SELECT 
///    d.nev AS "Tanuló neve",
//    t.agazat AS "Ágazat",
   // (d.hozott + d.kpmagy + d.kpmat) AS "Összes pontszám"
//FROM felveteli.diakok d
//JOIN felveteli.jelentkezesek j ON d.oktazon = j.diak
//JOIN felveteli.tagozatok t ON j.tag = t.akod
//ORDER BY "Összes pontszám" DESC;