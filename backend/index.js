import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

// Loads .env file into process.env
dotenv.config();

const app = express();

// Third party middleware for Cross Origin Resource Sharing
app.use(cors());

// Built in middleware to handle json
// Content-Type: application/json
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

// Starting the server after connected to the database
const startServer = async () => {
	try {
		connectDB(process.env.MONGODB_URL);
		app.listen(8080, () =>
			console.log('Server started on port http://localhost:8080')
		);
	} catch (error) {
		console.log(error);
	}
};

startServer();
