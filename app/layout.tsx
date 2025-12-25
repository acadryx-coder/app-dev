// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Acadryx AI Team',
  description: 'Persistent AI team for building apps from GitHub on Vercel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-blue-600 text-white p-4 shadow">
          <h1 className="text-xl font-bold">Acadryx AI Team</h1>
          <p className="text-sm">Your persistent AI-powered team for app development</p>
        </header>
        <main className="p-4">
          {children}
        </main>
        <footer className="bg-gray-200 text-gray-700 p-4 text-center text-sm">
          Powered by your AI team • Deploys to Vercel
        </footer>
      </body>
    </html>
  )
                                                             }
