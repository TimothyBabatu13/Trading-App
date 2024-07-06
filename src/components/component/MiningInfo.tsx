import Image from "next/image"

interface MiningInfoCardsTypes {
    img: string,
    header: string,
    text: string
}
const MiningInfoCards = ({ img, header, text } : MiningInfoCardsTypes) => {
    return(
        <div className="mb-12">
            <Image 
                height={183}
                width={316}
                src={img}
                alt=""
                className="max-w-full mx-auto"
            />
            <h2 className="text-xl phone:text-[25px] text-center">{header}</h2>
            <h3 className="text-[15px] text-lightGray text-center">{text}</h3>
        </div>
    )
}
const MiningInfo = () => {
    const data : MiningInfoCardsTypes[] = [
        {
            img: '/ServiceVector3.png',
            header: 'Daily Mining Outputs',
            text: 'Returns made from either trading or mining transactions will be added to your account daily and automatically.',
        },
        {
            img: '/ServiceVector1.png',
            header: 'State of the Art Mining',
            text: 'Productivity is a top notch quality for any investment. So, for every trade action or blockchain mining algorithm that we offer, we’re providing some of the highest performing systems and softwares that exist',
        },
        {
            img: '/ServiceVector2.png',
            header: 'Diverse Mining Portfolio',
            text: 'Choose from a wide range of target assets for trading and over 10 major mining algorithms that cut across 4 mineable cryptocurrencies',
        },
        {
            img: '/ServiceVector45.png',
            header: 'Hardware is already running',
            text: 'Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you already',
        },
        {
            img: '/ServiceVector55.png',
            header: 'Intuitive Dashboard',
            text: 'All the financial instruments data and charts that you need, when you need them',
        },
        {
            img: '/ServiceVector65.png',
            header: 'Secure and Private',
            text: 'We value the privacy of our users, so we strive to keep collected user data to a minimum level.',
        },
        
    ]
  return (
    <div className="grid laptop:grid-cols-3 laptop:gap-3">
        {
            data.map(datum => <MiningInfoCards key={datum.img} header={datum.header} img={datum.img} text={datum.text}/>)
        }
    </div>
  )
}

export default MiningInfo