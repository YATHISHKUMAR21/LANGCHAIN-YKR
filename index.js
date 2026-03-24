import { config } from 'dotenv';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { PromptTemplate } from '@langchain/core/prompts';

config();

const model = new ChatGoogleGenerativeAI({
    model: 'gemini-3-flash-preview', // safer working model
    apiKey: process.env.GEMINI_API_KEY,
});

const promptTemplate = PromptTemplate.fromTemplate(`
Explain {topic} in VERY SIMPLE WAY LIKE ELI5.
Include only core concepts.
Keep it concise.
`);


const chain = promptTemplate.pipe(model)

chain.invoke({
    topic: "What is the capital of France?"
}).then(response => {
    console.log(response.content);
}).catch(error => {
    console.error(error);
});




// async function run() {
//     try {
//         // Step 1: Create prompt
//         const prompt = await promptTemplate.invoke({
//             topic: "What is the capital of France?"
//         });

//         // Step 2: Send to model
//         const response = await model.invoke(prompt);

//         // Step 3: Print output
//         console.log(response.content);

//     } catch (error) {
//         console.error(error);
//     }
// }

// run();