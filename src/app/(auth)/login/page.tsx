'use client';
import Image from 'next/image'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Form } from '../components/Form'
import { Input } from '../components/Input'
import { TvIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {

  
  const [reff, setReff] = useState<Element | null | HTMLFormElement >(null)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if(reff instanceof HTMLFormElement){
      const form = new FormData(reff);
      const email = form.get('email');
      const password = form.get('password');

      if(!email || !password) return;

      console.log(email, password)
    }
      

  }

  useEffect(()=>{
    const ref = document.querySelector('#form');
    setReff(ref)
  }, [])

  return (
    <div>
      <Image 
        src={'/logo.png'}
        height={150}
        width={150}
        alt='logo'
        className='mx-auto'
        draggable={false}
      />
      <Form 
        onSubmit={handleSubmit}
        id='form'
      >
        <Input 
          placeholder='Email'
          name='email'
          icon={<TvIcon height={14} width={42} />}
        />
        <Input 
          placeholder='Password'
          name='password'
          icon={<TvIcon height={14} width={42} />}
        />

        <Button 
          className='w-full mt-7 py-[20px] bg-[#0177C6] rounded-[10px] text-[#fff] text-center hover:bg-[#2bbbad] h-4'
          style={{transform: 'perspective(1px) translateZ(0)', transition: 'background-color 0.2s ease-out'}}
        >
          Sign In
        </Button>
       <div 
        className='text-center mt-7 text-[15px]'
      >
        <Link className='text-[#0177c6] text-[15px]' href={'/forgot-password'}>Forgot Password?</Link>
        <h6>Dont have an account? <Link className='text-[#0177c6]' href={'/register'}>Sign Up</Link></h6>
       </div>
      </Form>
    </div>
  )
}

export default page