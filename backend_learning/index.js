// const express = require('express');
// const app = express();

// const { connectToMongoDB } = require('./connect');

// connectToMongoDB('mongodb://localhost:27017/myapp')
// .then(() => {
//     console.log('Connected to MongoDB');
// })


// const PORT = 8001;
// app.listen(PORT , ()=> console.log(`Server started at port : ${PORT}`))

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/skillDev';

async function main() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db('skillDev');
        const collection = database.collection('teachers');
        const trainers = await collection.find({}).toArray();
        console.log(trainers);
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);