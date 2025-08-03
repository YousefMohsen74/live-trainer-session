'use client'
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Link from "next/link";

interface MobileBarProps {
    setShow: (value: boolean) => void;
     show:boolean;
}  

const MobileBar: FC<MobileBarProps> = ({ setShow, show }) => {
     const pathname = usePathname();
    const handleClose = () => {
        setShow(false);
    };

 
    return (
        <div
            style={{ display: show ? "flex" : "none" }}
            className="absolute z-[90] w-full min-h-screen bg-[#232323] top-0 left-0  flex flex-col space-y-20"
        >
            <div
                className="w-full h-20 flex justify-end text-white items-center text-5xl pr-5 cursor-pointer"
                onClick={handleClose}
            >
                <IoCloseSharp />
            </div>
            <div className="flex flex-col space-y-16">
                <div
                    className="relative flex px-20 items-center cursor-pointer text-white space-x-5"
                  
                >
                    <Link onClick={handleClose} href={"/timer"} className="flex space-x-5">
                    <p className="font-bold text-lg block">00</p>
                    <p className="text-xl opacity-80 block">TIMER</p>
                    <div
                        style={{ display: pathname == "/timer" ? "flex" : "none" }}
                        className="absolute right-0 h-10 w-2 border-r-4 border-white self-end"
                    ></div>
                    </Link>
                </div>
                <div
                    className="relative flex px-20 items-center cursor-pointer text-white space-x-5"
                >
                    <Link onClick={handleClose} href={"/profile"} className="flex space-x-5">
                    <span className="font-bold text-lg">01</span>
                    <p className="text-xl opacity-80">PROFILE</p>
                    <div
                        style={{ display: pathname == "/profile" ? "flex" : "none" }}
                        className="absolute right-0 h-10 border-r-4 border-white self-end"
                    ></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileBar;
