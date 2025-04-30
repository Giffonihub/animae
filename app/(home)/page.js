import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-indigo-800 to-sky-200 text-white px-6 py-20 text-center">
      <div className="animate-pulse rounded-full bg-white/20 w-32 h-32 mb-6 shadow-lg" />

      <h1 className="text-6xl font-serif font-bold tracking-tight mb-4 drop-shadow-lg">
        ANIMAE
      </h1>
      <p className="text-xl max-w-xl mx-auto text-white/80">
        Custodi dell’identità emozionale nel Web3.
      </p>
      <p className="mt-2 text-md text-white/70">
        Nel futuro, l’unica vera identità sarà quella che evolve con ciò che provi.  
        Scopri il tuo <span className="font-semibold text-white">SoulID</span>.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/manifesto"
          className="px-6 py-2 rounded-full bg-white text-indigo-900 font-semibold hover:bg-indigo-100 transition"
        >
          Leggi il Manifesto
        </Link>
        <Link
          href="/onboarding"
          className="px-6 py-2 rounded-full border border-white text-white font-medium hover:bg-white/10 transition"
        >
          Inizia il tuo viaggio
        </Link>
      </div>
    </main>
  );
}
