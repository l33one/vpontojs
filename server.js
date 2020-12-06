const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//Iniciando APP
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/vpontoapi', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
requireDir("./src/models/");

app.use('/api', require("./src/routes"));

app.listen(3002);
