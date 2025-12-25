// app/ai/components/AIWorkspace.tsx
'use client'

import ChatWindow from './ChatWindow'
import ChatInput from './ChatInput'
import useAIChat from '../hooks/useAIChat'

export default function AIWorkspace() {
  const { messages, sendMessage, clearChat } = useAIChat()

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto mt-8 space-y-4">
      <h3 className="text-2xl font-semibold">AI Team Workspace</h3>
      <ChatWindow messages={messages} />
      <ChatInput onSend={sendMessage} />
      <button
        onClick={clearChat}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Clear Chat
      </button>
    </div>
  )
}
