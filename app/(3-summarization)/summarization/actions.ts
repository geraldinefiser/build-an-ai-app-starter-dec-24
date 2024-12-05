"use server";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

export const generateSummary = async (comments: any[]) => {
  const result = await generateObject({
    model: openai("gpt-4o-mini"),
    prompt: `Please summarize the following comments: 
    ----
    Comments: 
    ${JSON.stringify(comments)}`,
    schema: z.object({
      headline: z.string(),
      context: z.string(),
      discussionPoints: z.string(),
      takeaways: z.string(),
    }),
  });
  return result.object;
};
