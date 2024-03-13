const express=require('express');
const mysql2 = require('mysql2');
const bodyParser=require('body-parser');
const cors = require('cors');
const app=express();
const PORT = 8000;
const db = mysql2.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Niya@2912',
    database: 'Comment',
    waitForConnections: true,
    multipleStatements: true,
    namedPlaceholders: true,
  });
//   connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL database:', err);
//       return;
//     }
//     console.log('Connected to MySQL database');})
app.use(cors());
app.use(bodyParser.json());
app.post('/api/insert',(req,res)=>{
    const{comment}=req.body;
    db.query('INSERT INTO Comments (comment) VALUES (?)', [comment], (err) => {
        if(err){
            res.status(500).send('cant connect');
            console.log('cont send');
        }
        else{
            res.status(200).send('Connected');
            console.log('connected');
            console.log(req.body);

        }
    });
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  