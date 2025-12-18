export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight">
          Isaiah Hendrix
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Mechanical engineering student focused on materials reliability,
          polymer behavior, and data-driven analysis.
        </p>

        <div className="mt-10 space-y-6">
          <div className="border border-zinc-800 rounded-xl p-6">
            <h2 className="font-medium">
              Automated MATLAB Reliability Pipeline
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Data cleaning, Weibull analysis, and test standardization.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-xl p-6">
            <h2 className="font-medium">
              Silicone Elastomer Formulation Study
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Structure–property trends using safe, high-level summaries.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
