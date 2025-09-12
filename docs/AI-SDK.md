# Vercel AI SDK Integration

Trinity already has JSON chat routes. To enable streaming with the Vercel AI SDK:

1) Install packages (in your repo root):

```
npm install ai marked
```

If you want the provider helpers, use the official OpenAI SDK:

```
npm install openai
```

2) Create a streaming route (example):

```ts
// app/api/ai/coach/route.ts
import { NextRequest } from 'next/server';
import OpenAI from 'openai';
import { ReadableStream } from 'node:stream/web';

const SYSTEM = `You are Trinity Super Agent …`;

export async function POST(req: NextRequest) {
  const { messages = [] } = await req.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const stream = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    stream: true,
    messages: [{ role: 'system', content: SYSTEM }, ...messages]
  });
  const rs = new ReadableStream({
    async start(controller) {
      for await (const part of stream) {
        const delta = part.choices[0]?.delta?.content;
        if (delta) controller.enqueue(new TextEncoder().encode(delta));
      }
      controller.close();
    }
  });
  return new Response(rs, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
```

3) Client usage (useChat):

```
npm install ai
```

```tsx
// use the `ai` package's useChat hook (client component)
import { useChat } from 'ai/react';

const { messages, input, setInput, handleSubmit } = useChat({ api: '/api/ai/coach' });
```

4) Env vars on Vercel:

- OPENAI_API_KEY
- OPENAI_MODEL (optional)

