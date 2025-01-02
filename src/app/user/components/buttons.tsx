
import { CircleUserRoundIcon, FolderInput, Home,  Power, ShoppingBag, Store, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { LogOutButton } from "./client-buttons";


export const LogOut = ({ className } : {
    className?: string
})  => {
    return(
        <LogOutButton className={className}/>
    )
}

const Drawer = () => {
    return(
    <Sheet>
    <SheetTrigger>
        <svg role="button" viewBox="0 0 24 24" className="h-6 w-6 cursor-pointer stroke-lightGray mr-3 ">
            <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
    </SheetTrigger>
    <SheetContent iconClassName="hidden" className="w-[295px]" side={'left'}>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      </SheetDescription>
    </SheetHeader>
        <NavBarItems />
    </SheetContent>
</Sheet>

    )
}
const AccountInfo = () => {
    return(
        <div className="h-[142px] p-4" style={{background: 'url("/Office.jpg")'}}>
            <Image 
                src={'/camera.png'}
                height={64}
                width={64}
                alt="camera image"
                className="rounded-full"
                role="button"
            />
            <h2 className="text-white text-[20px]">Timothy Akanbi</h2>
            <h3 className="text-white text-[14px] font-normal">Live Account</h3>
        </div>
    )
}

const NavBarItems = () => {
    const links = [
        {
            icon: <Home height={18} width={18} />,
            text: 'Home',
            url: '/user'
        },
        {
            icon: <CircleUserRoundIcon height={18} width={18} />,
            text: 'Account',
            url: '/user/account'
        },
        {
            icon: <Store height={18} width={18} />,
            text: 'Markets',
            url: '/user/markets'
        },
        {
            icon: <FolderInput height={18} width={18} />,
            text: 'Deposits',
            url: '/user/deposits'
        },
        {
            icon: <Home height={18} width={18} />,
            text: 'Withdrawals',
            url: '/user/withdrawals'
        },
        {
            icon: <ShoppingBag height={18} width={18} />,
            text: 'Buy Coin',
            url: '/user/buy-coin'
        },
        {
            icon: <Home height={18} width={18} />,
            text: 'Upgrade',
            url: '/user/upgrade'
        },
        {
            icon: <Users height={18} width={18} />,
            text: 'Referrals',
            url: '/user/referrals'
        }
    ]
    return(
        <div className="fixed left-0 flex flex-col top-0 w-[295px] h-[100vh] bg-white">
            <AccountInfo />
            <div className="bg-[#0b1118] flex-1 flex flex-col pl-[31px] py-5">
                {
                    links.map(link =>(
                        <Link className="flex items-center flex-1 text-[#a5bdd9]" href={link.url} key={crypto.randomUUID()}>
                            {link.icon}
                            <h5 className="ml-2.5">{link.text}</h5>
                        </Link>
                    ))
                }
                <LogOutButton className="h-[18px] w-[18px] text-[#a5bdd9]">
                    <span className="text-[#a5bdd9]">Sign Out</span>
                </LogOutButton>
               
            </div>
        </div>
    )
}

export const NavBar = () => {
    
    return(
        <div>
            <Drawer />
        </div>
    )
}