// const mongoose = require('mongoose');
const db = require("./config/connection");
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(require('./routes'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`I'm listening`);
    });
});