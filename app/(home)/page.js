import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 text-center bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-5xl font-extrabold text-gray-900">ANIMAE</h1>
      <p className="mt-4 text-xl text-gray-700">
        Custodi dell’identità emozionale nel Web3.
      </p>
      <p className="mt-2 max-w-xl text-md text-gray-600">
        Nel futuro, l’unica vera identità sarà quella che evolve con ciò che provi.<br />
        Scopri il tuo <strong>SoulID</strong>.
      </p>

      <div className="mt-6 flex space-x-4">
        <Link
          href="/manifesto"
          className="px-5 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700"
        >
          Leggi il Manifesto
        </Link>
        <Link
          href="/onboarding"
          className="px-5 py-2 rounded-xl border border-gray-900 text-gray-900 hover:bg-gray-100"
        >
          Inizia il tuo viaggio
        </Link>
      </div>
    </main>
  );
}
