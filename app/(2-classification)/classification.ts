import "dotenv/config";
import supportRequests from "./support_requests.json";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

async function main() {
  console.log(supportRequests.slice(0, 2));
  const result = await generateText({
    model: openai("gpt-4o-mini"),
    prompt:
      "Classify the following support requests. The categories are (billing, product issues, enterprise sales, account issues, product feedback).\n\n" +
      JSON.stringify(supportRequests),
  });
  console.log(result.text);
}

main().catch(console.error);
