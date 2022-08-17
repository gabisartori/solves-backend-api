require('dotenv').config();

const express = require('express');
const app = express();

// Connecting to local mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => {console.error(error)});
db.once('open', () => {console.log('Connected to MongoDB')});

// Setting routes path
app.use(express.json());
const solvesRouter = require('./routes/solves');
app.use('/solves', solvesRouter);

// Setting up server
app.use(express.json());
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));