import FAQs, { FAQS2 } from '@/components/component/FAQs'
import WebsiteDetails from '@/components/component/WebsiteDetails'
import React from 'react'

const page = () => {
  return (
    <main className=' py-[42px]' style={{background: 'rgb(11, 17, 24)'}}>
      <h1 className='text-center font-normal text-[29px] phone:text-[34px]'>FAQS</h1>
      <div className='w-[90%] mx-auto'>
        <FAQs />
      </div>
      <h1 className='text-center font-normal text-[29px] phone:text-[34px] py-5'>FAQS</h1>
      <div className='w-[90%] mx-auto'>
        <FAQS2 />
      </div>
    </main>
  )
}

export default page