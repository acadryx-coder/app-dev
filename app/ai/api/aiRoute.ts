// app/ai/api/aiRoute.ts
import { NextResponse } from 'next/server'
import { addMemory, getMemory } from '../memory'
import { queryAI } from '../utils/aiBackend'

export async function POST(req: Request) {
  const { message } = await req.json()
  if (!message) return NextResponse.json({ error: 'No message provided' }, { status: 400 })

  addMemory('user', message)

  const aiResult = await queryAI({ message })
  addMemory('ai', aiResult.reply)

  const memory = getMemory()
  return NextResponse.json({ response: aiResult.reply, memory })
}
