'use client';

import { CircleUserRoundIcon, FolderInput, Home, Power, ShoppingBag, Store, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const LogOut = () => {
    return(
        <Power 
            className="cursor-pointer"
        />
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
            <div className="bg-[#0b1118] flex-1 pl-[31px]">
                {
                    links.map(link =>(
                        <Link className="flex text-[#a5bdd9]" href={link.url} key={crypto.randomUUID()}>
                            {link.icon}
                            <h5 className="ml-2.5">{link.text}</h5>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }
    return(
        <div>
            <svg role="button" onClick={handleClick} viewBox="0 0 24 24" className="h-6 w-6 cursor-pointer stroke-lightGray mr-3 ">
                <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
            <NavBarItems />
        </div>
    )
}