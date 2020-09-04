'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');

DB();

const app = express();
const router = express.Router();

app.use(express.json());

app.use(cors());

app.use('/api', router);

authRoutes(router);

app.use(router);
app.listen(propierties.PORT, () => console.log(`Server Port: ${propierties.PORT}`));