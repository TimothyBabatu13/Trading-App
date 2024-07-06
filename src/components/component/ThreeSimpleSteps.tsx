import Image from "next/image"

interface SimpleSTeps {
    img: string,
    Header: string,
    text: string,
    num: number
}

const ThreeSimpleStepsCards = ({ img, Header, text, num } : SimpleSTeps) => {
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
            <h1 className=" text-xl phone:text-[25px] mb-2">{num}. {Header}</h1>
            <h3 className="text-[15px] text-lightGray">{text}</h3>
        </div>
    </div>
  )
}

export const ThreeSimpleSteps = () => {
    const data : SimpleSTeps[] = [
        {
            img: '/Step1.png',
            Header: 'Register',
            text: 'Open Account for free in just a few minutes',
            num: 1
        },
        {
            img: '/Step2.png',
            Header: 'Deposit',
            text: 'Fund your trading account or purchase mining contracts',
            num: 2
        },
        {
            img: '/Step3.png',
            Header: 'Trade',
            text: 'Trade by yourself or copy our expert traders',
            num: 3
        }
    ] 
    return (
        <div className="laptop:grid grid-cols-3 gap-3">
            {data.map(datum => <ThreeSimpleStepsCards img={datum.img} num={datum.num} Header={datum.Header} text={datum.text} key={datum.num}/>)}
        </div>
    )
}
export default ThreeSimpleSteps