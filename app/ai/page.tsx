// app/ai/page.tsx
'use client'

import { useState } from 'react'

export default function AIPage() {
  const [input, setInput] = useState('')
  const [chat, setChat] = useState<{role: string, message: string}[]>([])

  const handleSend = () => {
    if (!input) return
    const userMessage = { role: 'user', message: input }
    setChat(prev => [...prev, userMessage])
    
    // Simulated AI response for now
    const aiMessage = { role: 'ai', message: `AI Team Response: "${input}" received and noted.` }
    setChat(prev => [...prev, aiMessage])
    
    setInput('')
  }

  return (
    <div className="space-y-4">
      <div className="border rounded p-4 h-96 overflow-y-auto bg-gray-50">
        {chat.map((c, idx) => (
          <div key={idx} className={c.role === 'user' ? 'text-right' : 'text-left'}>
            <p className={c.role === 'user' ? 'inline-block bg-blue-600 text-white px-3 py-1 rounded' : 'inline-block bg-gray-200 text-gray-900 px-3 py-1 rounded'}>
              {c.message}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask your AI team..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Send
        </button>
      </div>
    </div>
  )
      }
