// app/ai/page.tsx
'use client'

import { useState } from 'react'
import ChatInput from './components/ChatInput'
import ChatWindow from './components/ChatWindow'

type Message = {
  role: 'user' | 'ai'
  message: string
}

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSend = async (msg: string) => {
    const userMessage: Message = { role: 'user', message: msg }
    setMessages(prev => [...prev, userMessage])

    const res = await fetch('/ai/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg }),
    })
    const data = await res.json()
    const aiMessage: Message = { role: 'ai', message: data.response }
    setMessages(prev => [...prev, aiMessage])
  }

  return (
    <div className="space-y-4 max-w-4xl mx-auto mt-8">
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  )
      }
