import WebsiteDetails from "@/components/component/WebsiteDetails"

const page = () => {
  const Body = () => {
    return (
      <>
        <h3 className="mb-9">Founded in 2014 by a group of professionals who are artfully combining the technical expertise required to Copy Professional Traders (If you can’t trade on your own). Forex Trading, Crypto Currency Trading and Stock Trading with a dedicated corporate team, state of the art headquarters and a passion for helping those with a strong desire to improve their lives</h3>
        <h3 className="mb-9">Our team is committed to achieve exceptional results, being one step ahead. We created a trading platform for the long-term, setting up the standard to change the fortune of future generations to come! We are uniting all key aspects of running an efficient cryptocurrency mining operation. From building highly efficient data centers to providing a streamlined mining system for our users.</h3>
        <h3 className="mb-9">To mine competitively today, you need to invest significant resources, time and effort into your setup. Our team has built the most efficient mining systems to do the job for you. This way you can fully focus on keeping track of the markets and remain competitive with your mining rewards.</h3>
        <h3>Besides being the portal for interesting mining data, we are also actively contributing to the cryptocurrency ecosystem, from launching awareness campaigns to releasing open-source mining software. We are building mining data centers around the world that are able to support 6 mining algorithms for 10+ different cryptocurrencies. If that’s not enough, we’d be happy to also support the ones you want to mine!</h3>
      </>
    )
  }
  return (
    <WebsiteDetails
      body={<Body />} 
      title="Assest"
    />
  )
}

export default page