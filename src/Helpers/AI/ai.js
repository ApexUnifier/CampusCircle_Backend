import dotenv from "dotenv";
import OpenAI from "openai";
import { functionDescription } from "../features/functions.mjs";
import main from "../document/ReadDocument.js"
import schemas from "../../Models/index.js"; // assuming the model file is named 

const { NotesSchema,PostSchema,ResourceSchema } = schemas;


dotenv.config();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const getNotes = async () => {
  try {
    const notes = await NotesSchema.find().populate("userId");
    return notes;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getPosts = async () => {
  try {
    const posts = await PostSchema.find().populate("userId");
    return posts;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getResources = async () => {
  try {
    const resources = await ResourceSchema.find().populate("userId");
    return resources;
  } catch (error) {
    console.log(error);
    return null;
  }
};


const funcDes = functionDescription;
const runOpenAIRequest = async (Input) => {
  console.log("run LLM called ");
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  let messages = [
    {
      role: "system",
      content: process.env.CONTENT,
    },
    {
      role: process.env.USER_ROLE,
      content: Input,
    },
  ];

  try {
    console.log("Sending request to LLM API...");
    var response = await openai.chat.completions.create({
      model: process.env.MODEL,
      messages: messages,
      functions: funcDes,
    });
    let executedFunctions = {};
    while (
      response.choices[0].message.function_call &&
      response.choices[0].finish_reason !== "stop"
    ) {
      let message = response.choices[0].message;
      let function_name = message.function_call.name;
      if (executedFunctions[function_name]) {
        console.log(
          `Function ${function_name} has already been executed. Skipping...`
        );
        break;
      }
      let function_response = "";
      switch (function_name) {
        case "getNotes":
          function_response = getNotes();
          break;

        case "getPosts":
          function_response = getPosts();
          break;

        case "getResources":
          function_response=getResources();
          break;
        case "main":
          let mainArgs = JSON.parse(message.function_call.arguments);
          main(mainArgs.path);

        default:
          throw new Error(`Unsupported function: ${function_name}`);
      }
      executedFunctions[function_name] = true;
      messages.push({
        role: "function",
        name: function_name,
        content: function_response,
      });
      console.log(`Sending request to LLM with ${function_name} response...`);
      response = await openai.chat.completions.create({
        model: process.env.MODEL,
        messages: messages,
        functions: funcDes,
      });
    }
    response = await openai.chat.completions.create({
      model: process.env.MODEL,
      messages: messages,
      functions: funcDes,
    });
    console.log(response.choices[0].message);
    return JSON.stringify(response.choices[0].message);
  } catch (error) {
    console.error("Error:", error);
  }
};

// export default runOpenAIRequest;
runOpenAIRequest("hii");
