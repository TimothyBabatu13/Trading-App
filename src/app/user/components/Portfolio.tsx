import { Home, PiggyBank, UserCog } from "lucide-react"
import Link from "next/link"

const AmountWithText = ({ amount, text } : {
    amount: number,
    text: string
}) => {
    return(
        <div className="text-white text-center">
            <h2 className="text-[25px] py-[5px]">${amount}.00</h2>
            <h3 className="text-[75%]">{text}</h3>
        </div>
    )
}


export const Portfolio = () => {

    const links = [
        {
            icon: <Home height={30} width={30} />,
            text: 'Deposit',
            url: ''
        },
        {
            icon: <UserCog height={30} width={30} />,
            text: 'Copy Traders',
            url: ''
        },
        {
            icon: <PiggyBank height={30} width={30} />,
            text: 'Refer & Earn',
            url: ''
        },
    ]

    return(
        <div className="w-[35%]  pb-5">
            <div 
                className="p-5"
                style={{background: 'url(Background1.png)'}}
            >
                <div className="flex justify-between">
                    <AmountWithText 
                        amount={0}
                        text="DEPOSIT BALANCE"
                    />
                    <AmountWithText 
                        amount={0}
                        text="PROFIT BALANCE"
                    />
                </div>
                <div className="text-center">
                    <progress value="1" max="100" className="mx-auto h-[10px] rounded-[5px] bg-[white]" style={{"width": "88%", "display": "block", "marginTop": "30px"}}></progress>
                    <small className="text-[75%] text-[#fff]">SIGNAL STRENGTH</small>
                </div>
            </div>
            <div className="flex justify-between items-center mt-5">
                {
                    links.map(link =>(
                        <Link 
                            href={link.url}
                            className="text-[#0177C6] flex flex-col items-center"
                            key={crypto.randomUUID()}
                        >
                            {link.icon}
                            <span className="block">{link.text}</span>
                        </Link>
                    ))
                }
            </div> 
        </div>
    )
}