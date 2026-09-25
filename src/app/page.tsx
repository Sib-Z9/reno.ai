export const dynamic = "force-dynamic";

async function supabaseStatus() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/health`,
      {
        headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY! },
        cache: "no-store",
      },
    );
    return res.ok ? "connected" : `error: HTTP ${res.status}`;
  } catch (e) {
    return `error: ${(e as Error).message}`;
  }
}

export default async function Home() {
  const status = await supabaseStatus();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 font-sans">
      <h1 className="text-3xl font-semibold tracking-tight">reno.ai</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Renovation help for homeowners. Prototype coming soon.
      </p>
      <p className="text-sm text-zinc-500">Supabase: {status}</p>
    </main>
  );
}
