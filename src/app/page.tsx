// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16   sm:items-start">
        <div>
          <h1 className="text-4xl font-bold text-zinc-800">Welcome to RCCG</h1>
          <p className="text-zinc-600">
            We are a community of believers dedicated to spreading the gospel
            and serving our neighbors.
          </p>
        </div>
      </main>
    </div>
  );
}
