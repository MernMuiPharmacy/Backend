const mysql = require ("mysql2")
var conn =mysql.createConnection({
    host:'mysql-3783e59f-compliments.i.aivencloud.com',
    user:'avnadmin',
    port:23612,
    password:'AVNS_oD0e-ZBomT4mHL_JpTx',
    database:'pharma'
})
conn.connect((err)=>{
    err?console.log(err):console.log("database connected")
})

//credentials
module.exports=conn
