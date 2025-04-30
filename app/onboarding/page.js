"use client";
import { useState } from "react";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [emotion, setEmotion] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [quality, setQuality] = useState("");

  const handleNext = () => setStep(step + 1);

  const reset = () => {
    setStep(1);
    setEmotion("");
    setInspiration("");
    setQuality("");
  };

  const emotionMap = {
    Gioia: "#fef08a",
    Serenità: "#a5f3fc",
    Rabbia: "#fecaca",
    Gratitudine: "#bbf7d0",
    Tristezza: "#c7d2fe",
  };

  const symbolMap = {
    Natura: "🌿",
    Arte: "🎨",
    Musica: "🎵",
    Silenzio: "🌀",
    Esperienza: "🔥",
  };

  const phraseMap = {
    Coraggio: "Ogni emozione è un atto di forza.",
    Empatia: "Ascoltare è già amare.",
    Verità: "Sii trasparente con te stessə.",
    Pace: "La calma è rivoluzionaria.",
    Luce: "Sei destinato a illuminare.",
  };

  return (
    <main className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Il tuo viaggio emozionale</h1>

      {step === 1 && (
        <>
          <p className="mb-4">1. Che emozione ti ha guidato questa settimana?</p>
          <select
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Seleziona...</option>
            {Object.keys(emotionMap).map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
          <div className="mt-4">
            <button
              disabled={!emotion}
              onClick={handleNext}
              className="bg-gray-900 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Avanti
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <p className="mb-4">2. Cosa ti ha ispirato di recente?</p>
          <select
            value={inspiration}
            onChange={(e) => setInspiration(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Seleziona...</option>
            {Object.keys(symbolMap).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="mt-4">
            <button
              disabled={!inspiration}
              onClick={handleNext}
              className="bg-gray-900 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Avanti
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <p className="mb-4">3. Che qualità vuoi far emergere?</p>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Seleziona...</option>
            {Object.keys(phraseMap).map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
          <div className="mt-4">
            <button
              disabled={!quality}
              onClick={handleNext}
              className="bg-gray-900 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Genera SoulID
            </button>
          </div>
        </>
      )}

      {step === 4 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">✨ Il tuo SoulID simbolico ✨</h2>
          <div
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-inner"
            style={{ backgroundColor: emotionMap[emotion] }}
          ></div>
          <p className="text-lg mb-2">🌈 Emozione guida: <strong>{emotion}</strong></p>
          <p className="text-lg mb-2">🪷 Simbolo: <strong>{symbolMap[inspiration]}</strong> ({inspiration})</p>
          <p className="text-md italic text-gray-600">"{phraseMap[quality]}"</p>

          <button
            onClick={reset}
            className="mt-6 bg-white border px-4 py-2 rounded text-gray-900 hover:bg-gray-100"
          >
            Ricomincia
          </button>
        </div>
      )}
    </main>
  );
}
