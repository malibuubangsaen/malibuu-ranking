import Image from "next/image";
export default function Home() {
  const ranking = [
    { name: "ตะวัน", score: 19 },
    { name: "Any", score: 12 },
    { name: "หมอก", score: 9 },
    { name: "พริก", score: 7 },
    { name: "แป้ง", score: 6 },
    { name: "ฟิว", score: 1 },
  ];

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      />

<div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-[140px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-[140px] opacity-20"></div>

      <div className="relative z-10 max-w-md mx-auto px-6 py-10">
        <div className="text-center">
            <Image
              src="/logo.jpg"
              alt="MALIBUU Logo"
              width={180}
              height={180}
              className="mx-auto mb-4 drop-shadow-[0_0_25px_rgba(255,180,0,0.5)]"
          />

          <h1 className="text-5xl font-black tracking-wider text-yellow-400">
            MALIBUU
          </h1>

          <p className="text-pink-400 uppercase tracking-[4px] mt-2">
            Beer League
          </p>

          <p className="text-zinc-400 text-sm mt-2">
            Secret Beach Bar • Party Ranking
          </p>
        </div>

        <div className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5">
          {ranking.map((player, index) => (
            <div
              key={player.name}
              className="flex items-center justify-between py-4 border-b border-white/10 last:border-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : "🍺"}
                </span>

                <span className="font-semibold text-lg">
                  {player.name}
                </span>
              </div>

              <div className="text-yellow-400 font-bold text-xl">
                {player.score}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-pink-400">
            🍻 Drink More • Rank Higher 🍻
          </p>
        </div>
      </div>
    </main>
  );
}