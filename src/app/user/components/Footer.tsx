'use client';
import { BarChart2, Clock4, Home, UserCircle2Icon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation";

export const Footer = () => {

    const path = usePathname();


    const links = [
        {
            icon: <Home height={30} width={30} />,
            url: '/user'
        },
        {
            icon: <Home height={30} width={30} />,
            url: ''
        },
        {
            icon: <BarChart2 height={30} width={30} />,
            url: ''
        },
        {
            icon: <Clock4 height={30} width={30} />,
            url: ''
        },
        {
            icon: <Home height={30} width={30} />,
            url: ''
        },
        {
            icon: <UserCircle2Icon height={30} width={30} />,
            url: '/user/profile'
        },
    ]

    return(
        <footer className="w-full fixed left-0 bottom-0 bg-[#000000]">
           <div className="flex items-center justify-between h-12 w-[90%] mx-auto">
            {
                links.map(link => (
                    <Link 
                        className={path === link.url ? 'text-[#0177C6]' : 'text-[white]'} 
                        href={link.url}
                        key={crypto.randomUUID()}
                    >
                        {link.icon}
                    </Link>
                ))
            }
           </div>
        </footer>
    )
}