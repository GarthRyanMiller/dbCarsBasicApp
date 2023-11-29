const express = require('express')
const cors = require('cors');
const carsRouter = require("./CarsRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use('/cars', carsRouter);

app.get('*',(req,res) =>{
    res.status(404).send({ message: 'Cant find that resource, check URL'});
});

module.exports = app;