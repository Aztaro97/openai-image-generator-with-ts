var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { OpenAIApi, Configuration } from "openai";
const configuration = new Configuration({
    // apiKey: api_key,
    apiKey: `${process.env.OPENAI_API_KEY}`,
});
const openai = new OpenAIApi(configuration);
const getImageGenerator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { prompt } = req.body;
        const response = yield openai.createImage({
            prompt,
            n: 3,
            size: "512x512"
        });
        const imageUrl = response.data.data;
        res.status(200).json({
            imageUrl
        });
    }
    catch (error) {
        return res.status(401).json({
            message: error.message,
        });
    }
});
export { getImageGenerator };
//# sourceMappingURL=openAI.controllers.js.map