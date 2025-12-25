// app/ai/api/chat/route.ts
import { NextResponse } from 'next/server'
import { addMemory, getMemory } from '../../memory'

export async function POST(request: Request) {
  const { message } = await request.json()

  if (!message) return NextResponse.json({ error: 'No message provided' }, { status: 400 })

  // Add user message to memory
  addMemory('user', message)

  // Here, you would normally call your AI backend (Claude/Gemini/Open-source)
  // For now, we simulate a response
  const aiResponse = `AI Team: Received your message "${message}" and processed it.`

  // Add AI response to memory
  addMemory('ai', aiResponse)

  // Return memory plus latest AI message
  const memory = getMemory()
  return NextResponse.json({ response: aiResponse, memory })
}
