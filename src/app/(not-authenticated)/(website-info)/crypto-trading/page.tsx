import WebsiteDetails from '@/components/component/WebsiteDetails'
import React from 'react'

const page = () => {
  const Body = () => {
    return (
      <>
        <h3 className="mb-4">InspiringTrades is excited to announce the launch of our new cryptocurrency trading platform. Now you can start trading Bitcoin, Ethereum and many more cryptocurrencies quickly, easily and safely from wherever you are — in just seconds. You get great margin trading leverage and short sell options with fast deposits and withdrawals. Our support team is available 24/7/365 to help get you trading on our CySEC-regulated platform with a trading volume of US $11 billion monthly.</h3>
        <h3 className="mb-4">What is a crypto currency <br />
        A cryptocurrency like bitcoin is a virtual currency traded peer-to-peer on a blockchain, independent of centralized authorities like banks and governments. Cryptocurrencies are entirely virtual, so they are not backed by physical commodities and have no intrinsic value.</h3>
        <h3 className="mb-4">How Do Cryptocurrencies Work? <br />
        Primarily, cryptocurrencies rely on blockchain technology to complete a transaction via an intricate P2P network. Once a transfer request is entered into the network, it is validated by the network and added to a pool of other transactions to create a block of data for the ledger, which is then entered into the existing blockchain. Once the block is successfully added to the chain, the transaction is approved and completed.</h3>
        <h3>Are There Investment Opportunities with Cryptocurrencies?
        Absolutely. Cryptocurrencies have become established investment commodities among major financial institutions and have even been adopted by countries such as Australia and Japan. As with any investment though, there are risks linked to market movements, high volatility and economics.</h3>
      </>
    )
  }
  return (
    <WebsiteDetails
      body={<Body />}
      title='Crypto Trading'
    />
  )
}

export default page