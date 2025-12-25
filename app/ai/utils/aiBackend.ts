// app/ai/utils/aiBackend.ts
import { getMemory } from '../memory'

type AIRequest = {
  message: string
}

type AIResponse = {
  reply: string
}

export async function queryAI({ message }: AIRequest): Promise<AIResponse> {
  // Get previous context
  const context = getMemory().map(m => `${m.role}: ${m.message}`).join('\n')

  // Simulate AI processing (replace with Claude/Gemini/Open-source API later)
  const reply = `AI Team (simulated): Received your message "${message}". Context includes ${context.split('\n').length} previous messages.`

  return { reply }
    }
