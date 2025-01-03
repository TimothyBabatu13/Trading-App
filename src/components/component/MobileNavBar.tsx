import Link from "next/link"
import { SheetClose } from "../ui/sheet"

const MobileNavBar = () => {

    const data = [
        {
            text: 'Sign In',
            link: '/login',
            icon: ''
        },
        {
            text: 'Sign Up',
            link: '/register',
            icon: ''
        },
        {
            text: 'Copy Trading',
            link: '/copy-trading',
            icon: ''
        },
        {
            text: 'Crypto Trading',
            link: '/crypto-trading',
            icon: ''
        },
        {
            text: 'Crypto Mining',
            link: '/crypto-mining',
            icon: ''
        },
        {
            text: 'Forex Trading',
            link: '/forex-trading',
            icon: ''
        },
        {
            text: 'Stocks Trading',
            link: '/stocks-trading',
            icon: ''
        },
        {
            text: 'Options Trading',
            link: '/options-trading',
            icon: ''
        },
        {
            text: 'What is Leverage',
            link: '/what-is-leverage',
            icon: ''
        },
        {
            text: 'Responsible Trading',
            link: '/responsible-trading',
            icon: ''
        },
        {
            text: 'General Risk Disclosure',
            link: '/general-risk-disclosure',
            icon: ''
        },
        {
            text: 'About Us',
            link: '/about',
            icon: ''
        },
        {
            text: 'Cookie Policy',
            link: '/cookie-policy',
            icon: ''
        },
        {
            text: 'Privacy Policy',
            link: '/privacy-policy',
            icon: ''
        },
        {
            text: 'Terms of Service',
            link: '/terms-of-service',
            icon: ''
        },
        {
            text: 'Bitcoin Mining',
            link: '/bitcoin-mining',
            icon: ''
        },
        {
            text: 'Dogecoin Mining',
            link: '/dogecoin-mining',
            icon: ''
        },
        {
            text: 'Home Page',
            link: '/',
            icon: ''
        },
        {
            text: 'Contact Us',
            link: '/contact-us',
            icon: ''
        },
    ]
  return (
    <main>
        <div style={{background: 'rgb(11, 17, 24)'}} className="laptop:hidden max-h-[200vh] top-0 absolute overflow-y-scroll left-0 w-[300px]">
            <ul className="max-h-[99vh]">
                {data.map((_, id)=>(
                    <li key={id} className="h-[48px] flex items-center">
                        <SheetClose asChild>
                            <Link className="px-8 w-full" href={_.link}>
                                {_.icon}
                                <span className="text-sm text-lightGray">{_.text}</span>
                            </Link>
                        </SheetClose>
                    </li>
                ))}
            </ul>
        </div>
    </main>
  )
}

export default MobileNavBar