import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full min-h-screen  bg-[url(/background3.jpg)] bg-cover bg-no-repeat flex px-10 relative">
      <div className="text-white flex items-center">
        <p className="text-6xl tracking-widest font-semibold max-w-[25ch] max-md:text-center">
          NOISE OFF. FOCUS ON. TIME DOESN&apos;T RUSH HERE.
        </p>
      </div>
      <Link
        href="/timer"
        className="absolute bottom-36 rounded-4xl shadow-2xl cursor-pointer hover:scale-105 transition-all right-32 w-72 h-14 bg-white flex justify-center items-center max-[800px]:left-1/2 max-[800px]:-translate-x-1/2 z-50"
      >
        <span className="tracking-widest font-medium text-center">
          START A FOCUS SESSION
        </span>
      </Link>
    </section>
  );
}