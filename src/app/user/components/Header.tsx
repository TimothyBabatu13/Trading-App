
import Link from "next/link";
import { LogOut, NavBar } from "./buttons";

const AccountBalance = () => {
    
    return(
        <div className="flex items-center gap-5">
            <span>$0.00</span>
            <span>$0.00</span>
        </div>
    )
}
export const Header = () => {
    return(
        <header
            className="bg-[#0b118] h-[64px] flex justify-between items-center sticky top-0 left-0 w-full py-3 z-50 bg-inherit px-5"
        >
           <div className="flex items-center">
                <NavBar />
                <Link href={''}>InspiringTrades</Link>
           </div>
           <div className="flex item-center gap-5">
                <AccountBalance />
                <LogOut />
           </div>
        </header>
    )
}