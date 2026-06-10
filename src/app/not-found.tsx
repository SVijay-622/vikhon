import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-center px-4">
      <p className="text-indigo-400 font-mono text-sm tracking-[0.4em] uppercase mb-4">404 — Not Found</p>
      <h1 className="text-white font-black text-6xl mb-4" style={{ letterSpacing: "0.2em" }}>VIKHON</h1>
      <p className="text-zinc-500 text-lg mb-10">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="text-sm font-semibold text-white bg-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-500 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
