import { MotionDiv, MotionP } from "@/components/framer-motion/motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full min-h-screen  bg-[url(/background3.jpg)] bg-cover bg-no-repeat flex px-10 relative">
      <div className="text-white flex items-center">
        <MotionP
          initial={{
            opacity: 0,
            rotateY: -45,
            translateY: 100,
            translateX: -100,
            transformPerspective: 1000,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
            translateY: 0,
            translateX: 0,
            transformPerspective: 1000,
            scale: 1,
          }}
          transition={{
            duration: 1.6,
            ease: "backInOut",
            staggerChildren: 0.1,
          }}
          className="text-6xl tracking-widest font-semibold max-w-[25ch] max-md:text-center"
        >
          NOISE OFF. FOCUS ON. TIME DOESN&apos;T RUSH HERE.
        </MotionP>
      </div>
      <MotionDiv
        className="absolute bottom-36 right-44 w-72 h-14 bg-white flex justify-center items-center rounded-4xl shadow-xl cursor-pointer hover:scale-105 transition-all max-[800px]:left-1/2 max-[800px]:-translate-x-1/2 z-30 [transform-style:preserve-3d]"
        initial={{
          opacity: 0,
          rotateY: 20,
          translateY: 50,
          translateX: 50,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          rotateY: 0,
          translateY: 0,
          translateX: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        <Link href="/timer">
          <span className="tracking-widest font-medium text-center">
            START A FOCUS SESSION
          </span>
        </Link>
      </MotionDiv>
    </section>
  );
}
