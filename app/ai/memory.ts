// app/ai/memory.ts
// Simple in-memory storage for your AI chat memory
// This will persist per serverless instance on Vercel. For longer-term persistence, you can later connect to a database or GitHub storage.

type MemoryItem = {
  role: 'user' | 'ai'
  message: string
  timestamp: number
}

let memory: MemoryItem[] = []

export function addMemory(role: 'user' | 'ai', message: string) {
  memory.push({ role, message, timestamp: Date.now() })
}

export function getMemory() {
  // return last 50 messages by default
  return memory.slice(-50)
}

export function clearMemory() {
  memory = []
}
