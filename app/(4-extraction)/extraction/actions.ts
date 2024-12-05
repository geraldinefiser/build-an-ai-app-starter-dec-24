"use server";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { date, z } from "zod";

export const extractAppointment = async (input: string) => {
  const result = await generateObject({
    model: openai("gpt-4o-mini"),
    prompt: `Extract appointment info from the input: ${input}`,
    schema: z.object({
      title: z.string(),
      startTime: z.string(),
      endTime: z.string(),
      attendees: z.array(z.string()),
      location: z.string(),
      date: z.string(),
    }),
  });
  return result.object;
};
