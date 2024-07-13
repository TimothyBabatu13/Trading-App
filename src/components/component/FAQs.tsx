import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const SimpleComponent = ({ title, body, value } : {
    title: string,
    body: any,
    value: string
}) => {
    return(
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem className="text-lightGray font-normal" value={value}>
                    <AccordionTrigger className="text-[16.8px]">{title}</AccordionTrigger>
                    <AccordionContent style={{borderColor: 'rgb(221, 221, 221)'}} className="py-[28px] text-[15px] border-b">
                        {body}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

const B2 = ({ text } : {text: string}) => {
    return <h3>{text}</h3>
}

const FAQs = () => {
    
    const B1 = () => {
        return (
            <div>
                <h3 className="pb-[25px]">Here is how the copier works: You, as an investor, simply select an expert or experts that you want to copy trades from. Once you are signed up, this is the only action needed on your part.</h3>
                <h3 className="pb-[25px]">Once you’ve taken care of the above, you are all set. There are no codes that you need to run or signals for you to manually input. Our software will handle the trade copying automatically on your behalf. We monitor your experts trading activity and as soon as there is a trade, we calculate all the necessary parameters and execute the trade.</h3>
                <h3 className="pb-[25px]">The only thing you have to make sure of is that you have enough available base currency that your expert trades with, in your trading account. How much is enough? First, you must meet the exchanges minimum order amount (let’s say about $10 per trade to be safe). That means that if your expert executes a 5% order, you must have at least $300 in your account total value (at 100% expert allocation as an example). This also means that you need to have at least 10% or higher in available base currency to avoid missed trades.</h3>
                <h3>When the expert exits a position, you too will exit it. Automatically. You can also change allocation at any time.</h3>
            </div>
        )
    }

    const data1 = [
        {
            title: 'How does copy trading work?',
            body: <B1/>
        },
        {
            title: 'What are the fees?',
            body: <B2 text="Every investor is to pay a 15% withdrawal fee to complete withdrawal process and each trader gets a set percentage of the profit they make." />
        }
    ]
    const data2 = [
        {
            title: 'Who are the trading experts?',
            body: <B2 text="We carefully select expert applicants. We get to know them as a trader and examine their trading performance over a period of time. We also tend to look for expert who already have a following to further confirm their competence (social proof). You can also read about every expert on their individual performance pages."/>
        },
        {
            title: 'What is the recommended amount to start with?',
            body: <B2 text="We suggest to have around $3000-$5000 in your account in BTC value due to exchanges minimum order requirements and so that you can at least cover the subscription cost every month."/>
        }
    ]
  return (
    <main className=" laptop:grid grid-cols-2 gap-5">
        <div className="p-[10px]" style={{boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}>
            {data1.map((item, id) => <SimpleComponent value={`value ${id+12}`} key={id} title={item.title} body={item.body}/>)}
        </div>
        <div className="p-[10px]" style={{boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}>
            {data2.map((item, id) => <SimpleComponent value={`value${id}`} key={id} title={item.title} body={item.body}/>)}
        </div>
    </main>
    
  )
}

export const FAQS2 = () => {
    const data1 = [
        {
            title: 'What is a trading platform?',
            body: <B2 text="It is an online platform where traders track the quotes of different kinds of assets and make trades using the services provided by a broker."/>
        },
        {
            title: 'The Platform Doesn’t Load',
            body: <B2 text="Try opening it in some other browser. We recommend using the latest Google Chrome. The system will not let you log in to the trading platform if your location is blacklisted. Perhaps, there is an unexpected technical problem. Our support consultants will help you solve it." />
        },
        {
            title: 'When Will Deposits Be Credited',
            body: <B2 text="The funds are usually credited to trading accounts fast, but sometimes it can take from 2 to 5 business days (depending on your payment provider.) If the money has not been credited to your account right after you make a deposit, please wait for 1 hour. If after 1 hour there is still no money, please wait and check again." />
        },
        {
            title: 'Do I Need to Install Any Trading Software?',
            body: <B2 text="You can trade on our online platform in the web version right after you create an account. There is no need to install new software." />
        },
        {
            title: 'What Should I Do If a System Error Occurs?',
            body: <B2 text="When system errors occurs, we recommend clearing your cache and cookies. You should also make sure you are using the latest version of the web browser. If you take these actions but the error still occurs, contact our support team." />
        }
    ]
    const data2 = [
        {
            title: 'What are bonuses?',
            body: <B2 text="Bonus is the money the company provides to a client for trading. Traders don't lose their own funds when they lose a bonus. On the other hand, in case of success, they pocket the profit gained from using bonus funds."/>
        },
        {
            title: 'Trading and Quote Sessions',
            body: <B2 text="A quote session is a period when the platform receives and transmits quotes. However, one can make trades within a slightly shorter trading session, which is part of a quote session. As a rule, a quote session starts 5-10 minutes earlier and ends 5-10 minutes later than the trading session. This is meant to protect traders from the risk of high volatility at the beginning and the end of the quote session. For example, a quote session for Apple shares starts at 13:30 GMT (US Summer Time) and ends at 20:00. A trading session for Apple shares starts with a five-minute delay, i.e. at 13:35. And it ends at 19:55, which is 5 minutes before the quote session ends."/>
        },
        {
            title: 'Why Doesn’t a Trade Open Instantly?',
            body: <B2 text="It takes a few seconds to get data from the servers of our liquidity providers. As a rule, the process of opening a new trade takes up to 4 seconds."/>
        },
        {
            title: 'How Can I View the History of My Trades?',
            body: <B2 text="All information about your recent trades is available in the “Trades” section. You can access the history of all your trades through the section with the same name as your user account."/>
        },
        {
            title: 'What Is the Most Active Time of Day for Trading?',
            body: <B2 text="Trading activity depends on the working hours of major exchanges and increases at the time of important news releases. The most active trading sessions are European and North American ones. The European session begins at around 6:00 UTC and closes at 15:00 UTC. The North American trading session spans from 13:00 UTC until 22:00 UTC. Please note that some currency pairs and assets are available for trading for a limited period of time. The trading hours for each asset are specified in the “Trading Conditions” tab of the “Asset” menu."/>
        }
    ]
    return (
        <main className=" laptop:grid grid-cols-2 gap-5">
            <div className="p-[10px]" style={{boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}>
                {data1.map((item, id) => <SimpleComponent value={`value ${id+12}`} key={id} title={item.title} body={item.body}/>)}
            </div>
            <div className="p-[10px]" style={{boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'}}>
                {data2.map((item, id) => <SimpleComponent value={`value${id}`} key={id} title={item.title} body={item.body}/>)}
            </div>
         </main>
    )
}
export default FAQs