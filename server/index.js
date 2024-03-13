const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/Users.js');
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('The port is running');
});

app.use('/User', userRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = 'mongodb+srv://myAtlasDBUser:Niya%402912@myatlasclusteredu.q4lhidp.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Port is running on ${PORT}`)))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });
