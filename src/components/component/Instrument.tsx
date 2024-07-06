import Image from "next/image"
import Link from "next/link"

interface MiningInfoCardsTypes {
    img: string,
    header: string,
    text: string,
    href: string
}
const InstrumentCard =  ({ img, header, text, href } : MiningInfoCardsTypes) => {
    return(
        <div style={{background: 'rgb(11, 17, 24)', boxShadow: 'rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px, rgba(0, 0, 0, 0.2) 0px 1px 5px 0px'}} 
            className="mb-12 p-6 rounded-[2px]"
        >
            <Image 
                height={93}
                width={90.4167}
                src={img}
                alt=""
                className="max-w-full mx-auto mb-3"
            />
            <h2 className="text-xl text-lightGreen phone:text-[25px] text-center mb-[10px]">{header}</h2>
            <h3 className="text-[15px] text-lightGray text-center mb-[20px]">{text}</h3>
            <Link className="block text-center text-lightBlue" href={href}>Learn More</Link>
        </div>
    )
}

const Instrument = () => {
    const data : MiningInfoCardsTypes[] = [
        {
            img: '/World.svg',
            header: 'Copy',
            href: '',
            text: 'Copy trading allows you to directly copy the positions taken by another trader. You simply copy everything',
        },
        {
            img: '/Forex.svg',
            header: 'Forex',
            href:'',
            text: 'Trade currency pairs and be able to implement your own trading strategies with minimum slippage',
        },
        {
            img: '/Crypto.svg',
            header: 'Crypto',
            href: '',
            text: 'Buy and sell Bitcoin and other leading crypto currencies with ease on our platform',
        },
        {
            img: '/Stocks.svg',
            header: 'Stocks',
            href: '',
            text: 'Stocks, also commonly referred to as shares, are issued by a public corporation and put up for sale.',
        },
           
    ]
  return (
    <div className="grid laptop:grid-cols-4 laptop:gap-6">
        {
            data.map(datum => <InstrumentCard href={datum.href} key={datum.img} header={datum.header} text={datum.text} img={datum.img}/>)
        }
    </div>
  )
}

export default Instrument