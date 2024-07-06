import Image from "next/image"
import Link from "next/link"

interface SimpleSTeps {
    img: string,
    Header: string,
    text: string,
}

const ThreeSimpleStepsCards = ({ img, Header, text, } : SimpleSTeps) => {
  return (
    <div className="flex">
      <div className="flex-grow flex-shrink">
        <Image 
                height={87}
                width={91}
                src={img}
                alt=""
                className=""
            />
      </div>
        <div className="w-[298.333px] flex-grow-[4] flex-shrink">
            <h1 className=" text-base mb-2 font-bold">{Header}</h1>
            <h3 className="text-[15px] text-lightGray">{text} <Link className="text-lightBlue" href={''}>Learn more</Link></h3>
        </div>
    </div>
  )
}

const CopyTrading = () => {
    const data : SimpleSTeps[] = [
        {
            img: '/_Com7.png',
            Header: 'Copy Trading',
            text: 'Select from a list of expert traders, and automatically copy trades.',
        },
        {
            img: '/_Com1.png',
            Header: 'Trade Forex',
            text: 'Explore and trade major, minor and exotic currency pairs with efficient spreads',
        },
        {
            img: '/_Com4.png',
            Header: 'Mine Cryptocurrencies',
            text: 'Mine popular digital/crypto currencies with different algorithms.',
        },
        {
            img: '/_Com3.png',
            Header: 'CFD Stocks',
            text: 'Trade CFDs on stocks of leading companies and industry giants.',
        }
    ] 
  return (
    <div className="grid laptop:grid-cols-2 mt-16 gap-[20px]">
        {
            data.map(datum => <ThreeSimpleStepsCards key={datum.img} img={datum.img} Header={datum.Header} text={datum.text}/>)
        }
    </div>
  )
}

export default CopyTrading