import { Request, Response } from "express"
import { OpenAIApi, Configuration } from "openai";

const api_key = "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"

const configuration = new Configuration({
	apiKey: api_key,
	// apiKey: `${process.env.OPENAI_API_KEY}`,
});
const openai = new OpenAIApi(configuration);


const getImageGenerator = async (req: Request, res: Response) => {
	try {
		const { prompt } = req.body;

		const response = await openai.createImage({
			prompt,
			n: 3,
			size: "512x512"
		});
		const imageUrl = response.data.data
		res.status(200).json({
			imageUrl
		});
	} catch (error) {
		return res.status(401).json({
			message: error.message,
		})
	}
}


export { getImageGenerator }