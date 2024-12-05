Workshop: Building AI apps with the AI SDK and Next.js
December 2024

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, to run files in terminal:

```bash
pnpm extraction
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result for the following routes:
/summarize
/extraction
/chat

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tools used

- AI SDK
- OpenAi models
- Zod library


## Some key takeaways

Main ways to use ai:
- await generateText({})
- await generateObject({})
- streamText({})
- streamObject({})

Objects need a schema, that's where Zod came into play.

Zod descriptions (.describe()) are super usefull to tell the model how the answer should look like or what is the context that it might need to generate a better more specific answer.







