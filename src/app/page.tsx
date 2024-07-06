import CopyTrading from "@/components/component/CopyTrading";
import Instrument from "@/components/component/Instrument";
import Marquee from "@/components/component/Marquee";
import MiningInfo from "@/components/component/MiningInfo";
import ThreeSimpleSteps from "@/components/component/ThreeSimpleSteps";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div className="flex flex-col-reverse laptop:flex-row w-[83%] mx-auto my-24">
        <div className="flex-1 mt-6">
          <h1 className="text-deepWhite text-[23.8px] phone:text-[44px] font-semibold mb-4">Trusted Forex and Crypto Currency Broker</h1>
          <h3 className=" text-lightGray text-xl phone:text-[24px] font-thin mb-6">A trading platform that supports your financial goals.</h3>
          <div className="flex flex-col items-center small:flex-row small:items-start">
            <Button className="border w-[158.615px] mb-3 phone:mb-0 border-lightGreen text-lightGreen rounded-[5px] py-[6px] px-[20px] text-sm mr-3">CREATE ACCOUNT</Button>
            <Button className="bg-lightGreen w-[158.615px] rounded-[10px] py-[6px] px-[20px] text-sm">LOG IN ACCOUNT</Button>
          </div>
        </div>
        <Image className="flex-1 w-full" src={'/landing1.png'} height={200} width={200} alt=""/>
      </div>
      <div className="py-[42px]" style={{background: 'rgb(11, 17, 24)'}}>
        <div className="w-[85%] mx-auto py-[42px]">
          <h1 className=" text-[29px] phone:text-[34px] mb-3 font-normal">The all International Trading Platform</h1>
          <h5 className=" text-[15px] text-lightGray font-normal">InspiringTrades is one of the leading crypto and binary options brokers in the industry. With a high payout of 90% on crypto and binary options contracts, we offer the most generous payouts in the industry</h5>
        </div>
        <Marquee />
        <div className="flex flex-col laptop:flex-row justify-between w-[83%] mx-auto py-[42px]">
          <div className="laptop:w-[50%] flex justify-center"><Image className="" src={'/Experience.png'} height={795} width={246.906} alt=""/></div>
          <div className="laptop:w-[50%]">
            <h1 className=" text-[29px] phone:text-[34px]">Smooth Experience on any Device</h1>
            <h3 className=" text-xl phone:text-2xl text-lightGray my-6">Whether you prefer trading at your desk or on the go — InspiringTrades has got you covered.</h3>
            <h3 className="text-xl phone:text-2xl text-lightGray">The custom-built platform has been adapted for any device you may choose and switching is 100% seamless.</h3>
          </div>
        </div>
      </div>
      <div className="py-[42px] ">
        <div className="w-[90%] mx-auto flex flex-col-reverse items-center 856:flex-row">
          <div className="mt-5 856:w-[50%]">
            <h1 className="text-[29px] phone:text-[34px] font-bold">Technical Analysis</h1>
            <h3 className=" text-base text-lightGray">Get the most out of fundamental and technical analysis with our more than 100 most widely-used technical indicators and widgets. Always stay up-to-date on what is happening in the financial markets.</h3>
          </div>
          <div className="856:w-[50%] flex justify-center">
            <Image src={'/Analysis.png'} alt="" width={272.375} height={340.792}/>
          </div>
        </div>
      </div>
      <div className="py-[42px]" style={{background: 'rgb(11, 17, 24)'}}>
        <div className="flex flex-col items-center 856:flex-row 856:items-start w-[90%] mx-auto py-[42px]">
          <div className="mb-5 856:w-[50%]"><Image src={'/Landing3.png'} className="856:w-[90%] max-h-[60vh]" alt="" width={ 500.396} height={ 254.396}/></div>
          <div className="856:w-[50%]">
            <h1 className=" text-center text-[29px] phone:text-[34px]">Enjoy the ultimate platform</h1>
            <h3 className=" text-lightGray text-[15px] text-justify mb-5">Smooth Experience on Any Device. A multichart layout, technical analysis, historical quotes and beyond. Everything you’re looking for in a platform — on the device of your choice.</h3>
            <h3 className=" text-lightGray text-[15px] text-justify mb-3">Whether you prefer trading at your desk or on the go — InspiringTrades has got you covered. The custom-built platform has been adapted for any device you may choose and switching is 100% seamless.</h3>
            
            <div className="flex justify-center">
              <Link href={''} className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 border w-[158.615px] mb-3 phone:mb-0 border-lightGreen text-lightGreen rounded-[10px] py-[6px] px-[20px] text-sm mr-3">Open in Browser</Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[90%] mx-auto py-[84px]">
          <h1 className=" text-center text-[25px] mb-4">Three Simple Steps</h1>
          <ThreeSimpleSteps />
        </div>
      </div>
      <div className="py-[42px]" style={{background: 'rgb(11, 17, 24)'}}>
        <div className="py-[42px] w-[90%] mx-auto">
          <h1 className="text-[29px] phone:text-[34px] text-center text-lightBlue">Why Choose Us</h1>
          <h2 className="text-[15px] text-lightGray text-center mb-14">CFDs on Stocks, ETFs, Commodities, Indices, Cryptocurrencies and Forex</h2>
          <h3 className="text-[15px] text-lightGray text-justify mb-[15px]">InspiringTrades is one of the fastest growing online trading brands in the world. Voted the best mobile trading platform, we have now expanded our offerings to include CFDs on stocks, ETFs and Forex trading. First founded in 2013, InspiringTrades has grown massively and now has over 40 million members and counting! The platform itself has also undergone some changes since 2013, and we are constantly working to ensure it is fast, accurate and easy to use.</h3>
          <h3 className="text-[15px] text-lightGray text-justify">We have also refined our offering and introduced plenty of new products in our bid to continue giving our customers the ultimate online trading experience and to help them optimize their investment portfolio. Now, using our platform, our members can try CFDs on currency pairs, CFDs on stocks, CFDs on commodities, CFDs on cryptocurrencies, as well as CFDs on ETFs.</h3>
          <CopyTrading />
        </div>
      </div>
      <div>
        <h1>Worldwide Support</h1>
      </div>
      <div className="py-[42px]">
        <div className="w-[90%] mx-auto">
          <MiningInfo />
        </div>
      </div>
      <div>
        <div className="w-[90%] mx-auto">
          <h1 className="text-[29px] phone:text-[34px] text-center">Trade <span className="text-lightGreen">120+</span> Instruments at your Fingertips</h1>
          <h3 className=" text-[15px] text-lightGray text-center mb-16">Choose from a range of global markets and trade on extremely tight spreads.</h3>
          <Instrument />
        </div>
      </div>
      <div className="py-[42px]" style={{background: 'rgb(11, 17, 24)'}}>
        <div className="w-[90%] mx-auto">
          <h1 className="text-center text-[34px]">FAQs</h1>
        </div>
      </div>
    </main>
  );
}


//inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 border w-[158.615px] mb-3 phone:mb-0 border-lightGreen text-lightGreen rounded-[5px] py-[6px] px-[20px] text-sm mr-3