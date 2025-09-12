# API Reference

## POST /api/chat
Input: `{ messages: [{ role: 'user'|'assistant'|'system', content: string }] }`
Output: `{ reply: string }`

## POST /api/plan
Input: `{ horizon: 7|30|90, profile?: any }`
Output: `{ plan: { title: string, items: string[] }[] }`

## POST /api/journal/summarize
Input: `{ entries: string[] }`
Output: `{ summary: string }`

## POST /api/review/weekly
Input: `{ checkins: any[], journal: any[], habits: { items: any[], log: Record<string, boolean> } }`
Output: `{ summary: string }`

