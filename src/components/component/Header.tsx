import Link from "next/link"
import MobileNavBar from "./MobileNavBar"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"

const HeaderNav = () => {
    return(
    <Sheet>
        <SheetTrigger>
            <svg  viewBox="0 0 24 24" className="h-6 w-6 cursor-pointer stroke-lightGray mr-3 laptop:hidden">
                <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
        </SheetTrigger>
        <SheetContent iconClassName="hidden" className="w-[295px] p-0" side={'left'}>
            <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>

                </SheetDescription>
            </SheetHeader>
            <MobileNavBar />
        </SheetContent>
    </Sheet>

    )
}

const Header = () => {

    const links = [
        {
            text: 'About Us',
            href: '/about'
        },
        {
            text: 'Help Center',
            href: '/help'
        },
        {
            text: 'Assests',
            href: '/assets'
        }
    ]
  return (
    <header className="sticky top-0 left-0 w-full py-3 z-50 bg-inherit">
        
        <div className="flex items-center w-[85%] mx-auto">
            <div className="flex items-center">
                <HeaderNav />
                <Link href="/">INSPIRINGTRADES</Link>
                {links.map((link, index) => <Link className="text-[#c5bfbf] hidden laptop:block ml-6 text-sm" href={link.href} key={index}>{link.text}</Link>)}
            </div>
            <div className=" ml-auto flex ">
                <Link href={'/login'} className="hidden laptop:block border border-lightGreen text-lightGreen rounded-[5px] py-[6px] px-[20px] ">Login</Link>
                <Link href={'/register'} className="hidden laptop:block ml-6 bg-lightGreen rounded-[10px] py-[6px] px-[20px]">Registration</Link>
            </div>
        </div>
    </header>
  )
}

export default Header