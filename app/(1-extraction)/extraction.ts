import "dotenv/config";
import fs from "fs";

// AI SDK Core module
import { generateText } from "ai";

// Model provider
import { openai } from "@ai-sdk/openai";

// import essay
const essay = fs.readFileSync("app/(1-extraction)/essay.txt", "utf-8");

async function main() {
  const result = await generateText({
    model: openai("o1-mini"),
    prompt:
      "Who was targeted by the message in this piece in 50 words?" +
      "\n\n" +
      essay,
  });
  console.log(result.text);
}

main().catch(console.error);
