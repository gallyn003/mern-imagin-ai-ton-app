import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

// Loads .env file into process.env
dotenv.config();

const router = express.Router();

// OpenAI API key configuration
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

// OpenAI instance with configuration
const openai = new OpenAIApi(configuration);

// Creating image based on prompt text
router.route('/').post(async (req, res) => {
	try {
		const { prompt } = req.body;

		const aiResponse = await openai.createImage({
			prompt,
			n: 1,
			size: '1024x1024',
			response_format: 'b64_json',
		});

		const image = aiResponse.data.data[0].b64_json;

		res.status(200).json({ photo: image });
	} catch (error) {
		console.log(error);
		res.status(500).send(error?.response.data.error.message);
	}
});

export default router;
