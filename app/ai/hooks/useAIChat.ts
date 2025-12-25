// app/ai/hooks/useAIChat.ts
'use client'

import { useState } from 'react'

type Message = { role: 'user' | 'ai'; message: string }

export default function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = async (text: string) => {
    if (!text.trim()) return
    const userMessage: Message = { role: 'user', message: text }
    setMessages(prev => [...prev, userMessage])

    const res = await fetch('/ai/api/aiRoute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    })
    const data = await res.json()
    const aiMessage: Message = { role: 'ai', message: data.response }
    setMessages(prev => [...prev, aiMessage])
  }

  const clearChat = () => setMessages([])

  return { messages, sendMessage, clearChat }
}
