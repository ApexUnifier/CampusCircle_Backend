import dotenv from "dotenv";
import OpenAI from "openai";

import { functionDescription } from "../description/functions.mjs";


dotenv.config();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
        case "email":
          let emailArgs = JSON.parse(message.function_call.arguments);
          function_response = email(
            emailArgs.subject,
            emailArgs.emailAddress,
            emailArgs.Body
          );
          await delay(500);
          // await delay(2000);
          break;
        case "getAllVacancies":
          // Make API call to retrieve vacancies
          try {
            function_response = await getAllVacancies();
            console.log(function_response);
          } catch (error) {
            console.error("Error fetching vacancies:", error);
          }
          break;
        case "docVacany":
          try {
            function_response = await getAllVacancies();
            console.log(function_response);
          } catch (error) {
            console.error("Error fetching vacancies:", error);
          }
          break;
        case "getUsersAi":
          // Make API call to retrieve vacancies
          try {
            function_response = await getUsersAi();
            console.log(function_response);
          } catch (error) {
            console.error("Error fetching vacancies:", error);
          }
          break;
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

export default runOpenAIRequest;
