'use client';
import Image from 'next/image'
import React, { FormEvent, useEffect, useState } from 'react'
import { Form } from '../components/Form'
import { Input } from '../components/Input'
import { Mail, ToggleRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { checkIfFormValueIsEmpty } from '@/lib/utils';

const page = () => {
  const router = useRouter();
  const [reff, setReff] = useState<Element | null | HTMLFormElement >(null)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if(reff instanceof HTMLFormElement){
      const form = new FormData(reff);
      const email = form.get('email');
      const password = form.get('password');

      if(!checkIfFormValueIsEmpty(email) || !checkIfFormValueIsEmpty(password)) {
        alert('Please fill in the form')
        return
      };

      router.push('/user')
    }
      

  }

  useEffect(()=>{
    const ref = document.querySelector('#login-form');
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
        id='login-form'
      >
        <Input 
          placeholder='Email'
          name='email'
          type='email'
          icon={<Mail height={14} width={42} />}
        />
        <Input 
          placeholder='Password'
          name='password'
          type='password'
          className='text-black'
          icon={<ToggleRight height={14} width={42} />}
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