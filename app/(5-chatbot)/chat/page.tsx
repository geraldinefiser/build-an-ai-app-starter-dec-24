"use client";
import { useChat } from "ai/react";
import Weather from "./weather";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    id: "weather",
    maxSteps: 5,
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? "User: " : "AI: "}
          {message.toolInvocations ? (
            message.toolInvocations.map((t) =>
              t.toolName === "getWeather" && t.state === "result" ? (
                <Weather key={t.toolCallId} weatherData={t.result} />
              ) : null
            )
          ) : (
            <p>{message.content}</p>
          )}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message"
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        />
      </form>
    </div>
  );
}
