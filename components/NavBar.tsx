"use client";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileBar from "./mobileNavBar";
import { useState } from "react";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <MobileBar setShow={setShow} show={show} />
      <div className="absolute px-9 top-5 w-full h-20 flex items-center justify-between z-50">
        <div className="relative rounded-full w-10 h-10 bg-black z-40 flex justify-center items-center cursor-pointer">
          <Link href={"/"}>
            <Image src={"/logo.svg"} fill alt="Logo" />
          </Link>
        </div>
        <div
          className={`absolute w-5/12 h-0.5 left-44 opacity-15 z-40 bg-white max-md:hidden`}
        ></div>
        <div className="w-1/2 h-full  backdrop-blur-sm flex items-center text-white  justify-evenly max-md:hidden">
          <div className="relative h-full flex flex-col justify-center">
            <div className="flex space-x-2 items-center cursor-pointer">
              <span className="font-bold text-sm">00</span>
              <div className="text-base opacity-80">
                <Link href={"/timer"}>TIMER</Link>
              </div>
            </div>
            <div
              className={` ${
                pathname == "/timer" ? "flex" : "hidden"
              } absolute  -bottom-1 w-full h-2 border-t-4 border-white self-end`}
            ></div>
          </div>
          <div className="relative h-full flex flex-col justify-center">
            <div className="flex space-x-2 items-center cursor-pointer">
              <span className="font-bold text-sm">01</span>
              <div className="text-base opacity-80">
                <Link href={"/profile"}>PROFILE</Link>
              </div>
            </div>
            <div
              className={`${
                pathname == "/profile" ? "flex" : "hidden"
              } absolute flex -bottom-1 w-full h-2 border-t-4 border-white self-end`}
            ></div>
          </div>
        </div>
        <div
          onClick={() => setShow(true)}
          className="w-10 h-10 cursor-pointer hidden max-[800px]:block"
        >
          <CiMenuBurger className="w-full h-full text-white" />
        </div>
      </div>
    </>
  );
}
