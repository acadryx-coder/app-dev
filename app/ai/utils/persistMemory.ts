// app/ai/utils/persistMemory.ts
import fs from 'fs'
import path from 'path'

type MemoryItem = {
  role: 'user' | 'ai'
  message: string
  timestamp: number
}

// Path for local persistence (for testing on Vercel, later swap with DB)
const MEMORY_FILE = path.join(process.cwd(), 'aiMemory.json')

export function saveMemory(memory: MemoryItem[]) {
  try {
    fs.writeFileSync(MEMORY_FILE, JSON.stringify(memory, null, 2))
  } catch (err) {
    console.error('Failed to save memory:', err)
  }
}

export function loadMemory(): MemoryItem[] {
  try {
    if (fs.existsSync(MEMORY_FILE)) {
      const data = fs.readFileSync(MEMORY_FILE, 'utf-8')
      return JSON.parse(data)
    }
  } catch (err) {
    console.error('Failed to load memory:', err)
  }
  return []
}
