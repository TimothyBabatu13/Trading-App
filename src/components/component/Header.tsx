import { University } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"


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
                <Link href="/">INSPIRINGTRADES</Link>
                {links.map((link, index) => <Link className="text-[#c5bfbf] hidden laptop:block ml-6 text-sm" href={link.href} key={index}>{link.text}</Link>)}
            </div>
            <div className=" ml-auto flex ">
                <Button className="hidden laptop:block border border-lightGreen text-lightGreen rounded-[5px] py-[6px] px-[20px]">Login</Button>
                <Button className="hidden laptop:block ml-6 bg-lightGreen rounded-[10px] py-[6px] px-[20px]">Registration</Button>
            </div>
        </div>
    </header>
  )
}

export default Header