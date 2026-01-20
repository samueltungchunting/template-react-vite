export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-950 text-zinc-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to Your App
        </h1>
        <p className="text-zinc-400 mb-8">
          Edit <code className="bg-zinc-800 px-2 py-1 rounded">src/App.tsx</code> to get started
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://vitejs.dev/guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
          >
            Vite Docs →
          </a>
        </div>
      </div>
    </main>
  );
}
