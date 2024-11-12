const express = require('express');
const app = express();

const { connectToMongoDB } = require('./connect');

connectToMongoDB('mongodb://localhost:27017/myapp')
.then(() => {
    console.log('Connected to MongoDB');
})
