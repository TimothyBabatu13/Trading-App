import H3, { H1 } from "@/components/component/HeaderHeader"
import WebsiteDetails from "@/components/component/WebsiteDetails"

const page = () => {
    const Body = () => {
        return (
            <>
                <H3>Cryptocurrency networks need computational power to run securely. The world’s most powerful blockchains are supported by millions of computers around the world. Unlike paper money, Bitcoin and other cryptocurrencies are produced mathematically and held digitally. The people who voluntarily offer their computing power to secure these cryptocurrency networks are called miners.</H3>
                <H3 classname>Cryptocurrencies don’t have a central government or other so-called ‘middlemen’ that decide about the future of the system. – They are in fact digital, borderless democracies in which miners vote with their computing power to reach order and consensus.</H3>
                <H1>HOW IS BITCOIN KEPT SECURE</H1>
                <H3 classname>The only way to not create money out of thin air or corrupt it, is to burn real energy. This is called Proof-Of-Work. Today, bitcoin is the most secure computer network on the planet and it’s practically impossible to break it! The reason for that is hash power, the umbrella term used for the computing power that miners provide to the bitcoin network and similar cryptocurrency networks. Due to the rapid growth of the ecosystem, mining operations today are mostly running with specialized high-performance computers that function most efficiently set up in large data centers.</H3>
                <H1>WHAT ARE THE INCENTIVES FOR MINERS</H1>
                <H3 classname>It all comes down to trust: Miners keep the blockchains trustworthy and are rewarded for their efforts. As miners, we are processing and verifying the transactions of the cryptocurrency ecosystems and keeping their public transaction history (blockchains) maintained and secure. For this, the mining community is rewarded with the networks’ transaction fees and newly created coins. It’s a win-win situation! When you start mining with us, you are getting your share of this reward.</H3>
                <H1>THE BIG VISION OF CRYPTO CURRENCY</H1>
                <H3>To keep the integrity (and values!) of all cryptocurrency ecosystems intact, miners keep the networks safe and its authority decentralized by keeping each other constantly in check. This allows both a healthy growth and a fair distribution of currency units to all crypto-citizens!</H3>
            </>
        )
    }
  return (
    <WebsiteDetails 
        title="Crypto Mining"
        body={<Body/>}
    />
  )
}

export default page