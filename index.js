import {config} from 'dotenv';
import {ChatGoogleGenerativeAI} from '@langchain/google-genai'

config();

const model = new ChatGoogleGenerativeAI({
    model: 'gemini-3-flash-preview',
    apiKey: process.env.GEMINI_API_KEY,

});

model.invoke('What is the capital of France?').then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});

