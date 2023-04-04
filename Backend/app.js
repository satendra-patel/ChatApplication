
const express  = require('express');
const app = express();
const body_parser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

app.use(body_parser.json());
app.use(cors());


dotenv.config();
const userRoutes=require('../Backend/router/user');
const data_base = require('./config/database');

app.use('/user',userRoutes);




data_base.sync()
    .then(() => {
        app.listen(process.env.PORT || 5000);
    })
    .catch(err => console.log(err));


