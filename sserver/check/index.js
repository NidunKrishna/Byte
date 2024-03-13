const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 8001;

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'Niya@2912',
  database: 'Bytebase',
  waitForConnections: true,
  multipleStatements: true,
  namedPlaceholders: true,
});

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  return res.send('The server is running');
});

app.get('/users', (req, res) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Bytebase (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )`;

  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    return res.json({ message: 'Table created or already exists' });
  });
});

app.get('/push', (req, res) => {
  const sql = `SELECT * FROM Bytebase`;

  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    return res.json({data});
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
