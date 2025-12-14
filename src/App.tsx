
const App = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">System Prompt</h1>
      <a 
        href="/prompt.txt" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline text-xl"
      >
        Открыть prompt.txt
      </a>
    </div>
  </div>
);

export default App;