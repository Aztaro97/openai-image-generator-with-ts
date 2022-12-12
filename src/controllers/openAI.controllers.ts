import { Request, Response } from "express"
import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
	apiKey: `${process.env.OPENAI_API_KEY}`,
});
const openai = new OpenAIApi(configuration);


const getImageGenerator = async (req: Request, res: Response) => {
	try {
		const { prompt, imageNumber, imageSize } = req.body;

		const size = imageSize === "small" ? "512x512" : imageSize === "medium" ? "256x256" : "1024x1024";

		const response = await openai.createImage({
			prompt,
			n: imageNumber,
			size
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