import mongoose from 'mongoose';

// Connect to MongoDB database
const connectDB = (url) => {
	mongoose.set('strictQuery', true);

	mongoose
		.connect(url)
		.then(() => {})
		.catch((err) => console.error(err));
};

export default connectDB;
