// app/page.tsx
export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-16">
      <h2 className="text-3xl font-bold mb-4">Welcome to Your AI Team App</h2>
      <p className="text-gray-700 mb-8">
        This is your personal AI-powered development team. 
        It remembers your project structure and helps you build apps directly from GitHub to Vercel.
      </p>
      <div className="space-x-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Start a New Feature
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition">
          View Existing Files
        </button>
      </div>
    </div>
  )
}
