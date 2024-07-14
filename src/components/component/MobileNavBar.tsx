import { useNavBarContext } from "@/app/context/NavBarContext"
import Link from "next/link"

const MobileNavBar = () => {
    const { setIsOpen } = useNavBarContext();

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
        <div onClick={() => setIsOpen((prev : boolean) => !prev)} className="w-[100vw] h-[100vh] fixed left-0"></div>
        <div style={{background: 'rgb(11, 17, 24)'}} className=" laptop:hidden fixed h-max left-0 w-[300px] over overflow-y-scroll">
            <ul>
                {data.map((_, id)=>(
                    <li key={id} className="h-[48px] flex items-center">
                        <Link onClick={()=>setIsOpen((prev : boolean) => !prev)} className="px-8 w-full" href={_.link}>
                            {_.icon}
                            <span className="text-sm text-lightGray">{_.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </main>
  )
}

export default MobileNavBar