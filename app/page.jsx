export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
    <div className=" absolute top-0 left-0 flex flex-col h-screen w-[15vw] rounded opacity-75 bg-purple-600 shadow-lg">
        <div className="text-6xl shadow-lg shadow-purple-800 text-center font-semibold py-6">TiP0</div>
        <a href="/culegere" target="__bkank" className="text-2xl text-center border-t-2 font-semibold border-purple-700 shadow-lg shadow-purple-700 py-4 hover:bg-purple-800 hover:text-purple-300  transition-colors duration-300 ease-in-out" >Culegere</a>
        <a href="/test" target="_blank" className="text-2xl border-t-2 text-center border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">   Test</a>
        <a href="/duel" target="_blank" className="text-2xl border-t-2 text-center border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Duel</a>
        <a herf="/catalog" target="_blank" className="text-2xl border-t-2 text-center border-b-2 border-purple-700 py-4 font-semibold shadow-lg shadow-purple-700 hover:bg-purple-800 hover:text-purple-300 transition-colors duration-300 ease-in-out">Catalog</a>
      </div>
      </main>
  )
}

// target="_blank"
