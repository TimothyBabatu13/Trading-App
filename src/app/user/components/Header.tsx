
import { Power } from "lucide-react";
import Link from "next/link";
import { LogOut, NavBar } from "./buttons";

export const Header = () => {
    return(
        <header
            className="bg-[#0b118] h-[64px] flex justify-between items-center sticky top-0 left-0 w-full py-3 z-50 bg-inherit px-5"
        >
           <div className="flex items-center">
                <NavBar />
                <Link href={''}>InspiringTrades</Link>
           </div>
           <LogOut />
        </header>
    )
}