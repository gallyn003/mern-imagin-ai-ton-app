import mongoose from 'mongoose';

// Connect to MongoDB database
const connectDB = (url) => {
	mongoose.set('strictQuery', true);

	mongoose
		.connect(url)
		.then(() => console.log('Connected to MongoDB'))
		.catch((err) => console.error(err));
};

export default connectDB;
