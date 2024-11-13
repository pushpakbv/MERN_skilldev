const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors()); //by default all origins
//single origin
// const corsOptions = {
// 	origin: 'http://localhost:3000', // Only allow requests from this URL
// };

// app.use(cors(corsOptions));
//allow multiple origins
const allowedOrigins = ['http://localhost:3000', 'http://example.com'];

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	}
};

app.use(cors(corsOptions));
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((error) => console.error('MongoDB connection error:', error));
app.use('/api/items', itemRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});