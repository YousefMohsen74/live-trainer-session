import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full min-h-screen bg-[url(/background3.jpg)] bg-cover bg-no-repeat flex px-10">
      <div className="text-white flex items-center">
        <p className="text-6xl tracking-widest font-semibold max-w-[25ch]">
          NOISE OFF. FOCUS ON. TIME DOESN&apos;T RUSH HERE.
        </p>
      </div>
      <div className="absolute bottom-36 rounded-4xl shadow-2xl cursor-pointer hover:scale-105 transition-all right-32 w-72 h-14 bg-white flex justify-center items-center max-[800px]:left-1/2">
        <div className=" tracking-widest font-medium">
          <Link href={"/timer"}>START A FOCUS SESSION</Link>
        </div>
      </div>
    </section>
  );
}
