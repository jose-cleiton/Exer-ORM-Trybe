const express = require('express');
const { Store } = require('./src/models');

require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  Store.findAll().then(stores => {
    res.status(200).json(stores);
  }).catch(err => {
    console.log(err);
    res.status(500).json({message: 'Internal server error'});
  })
})


const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.clear();
    console.log(`Server is running on port ${port}`);
})