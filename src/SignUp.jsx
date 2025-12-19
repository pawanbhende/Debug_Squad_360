export default function Signup() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 min-h-screen bg-black/10">
      <div className="bg-white/90 rounded-xl shadow-xl p-8 w-full max-w-md hover:scale-105 transition-all delay-100 ease-in">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button className="w-full py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
            Signup
          </button>
        </form>
      </div>
    </section>
  );
}
