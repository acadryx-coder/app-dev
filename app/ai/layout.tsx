// app/ai/layout.tsx
import '../globals.css'

export const metadata = {
  title: 'AI Workspace',
  description: 'Persistent AI team workspace for Acadryx'
}

export default function AILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  )
                                 }
