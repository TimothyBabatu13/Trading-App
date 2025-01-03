'use client';
import React, { FormEvent, useEffect, useState } from 'react'
import { Form } from '../components/Form'
import { Input } from '../components/Input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { checkIfFormValueIsEmpty } from '@/lib/utils';
import Image from 'next/image';

const page = () => {

  const [form, setForm] = useState<Element | HTMLFormElement | null>();

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(form instanceof HTMLFormElement){
      const formData = new FormData(form);
      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirm-password');
      const firstName = formData.get('first-name');
      const lastName = formData.get('last-name');
      const mobileNumber = formData.get('tel');
      const state = formData.get('state');
      const city = formData.get('city');
      const terms = formData.get('terms');

      /* check if all enties are filled */
      if(!checkIfFormValueIsEmpty(email) || !checkIfFormValueIsEmpty(password) || !checkIfFormValueIsEmpty(confirmPassword) || !checkIfFormValueIsEmpty(firstName) || !checkIfFormValueIsEmpty(lastName) || !checkIfFormValueIsEmpty(mobileNumber) || !checkIfFormValueIsEmpty(state) || !checkIfFormValueIsEmpty(city)){
        alert('entry is empty');
        return;
      }

      /* check if the two password entries match */
      if(!(password?.toString() === confirmPassword?.toString())){
        alert(`password doesn't match`);
        return;
      }
      
      /* check if terms of condition is checked or not */
      if(!checkIfFormValueIsEmpty(terms)){
        alert('please click on terms of condition');
        return;
      }

      /* function that sends this data to backend */
    }
  }

  useEffect(() => {
    const formElement = document.querySelector('#signup-form');
    setForm(formElement)
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
        id='signup-form'
        onSubmit={handleSignUp}
      >
        <Input 
          placeholder='Email'
          type='email'
          name='email'
        />
        <Input 
          placeholder='Password'
          type='password'
          name='password'
        />
         <Input 
          placeholder='Confirm Password'
          type='password'
          name='confirm-password'
        />
        <Input 
          placeholder='First Name'
          type='text'
          name='first-name'
        />
        <Input 
          placeholder='Last Name'
          type='text'
          name='last-name'
        />
        <Input 
          placeholder='Mobile Number'
          type='tel'
          name='tel'
        />
        <div>Other forms</div>
        <Input 
          placeholder='State'
          type='text'
          name='state'
        />
        <Input 
          placeholder='City'
          type='text'
          name='city'
        />
        <Input 
          type='checkbox'
          placeholder='I Accept All Terms Of Service'
          id='terms'
          classname='flex items-center justify-center flex-row-reverse'
          className='w-fit h-fit'
          name='terms'
        />
        
        <Button 
          className='w-full mt-7 py-[20px] bg-[#0177C6] rounded-[10px] text-[#fff] text-center hover:bg-[#2bbbad] h-4'
          style={{transform: 'perspective(1px) translateZ(0)', transition: 'background-color 0.2s ease-out'}}
        >
          Create My Account
        </Button>

        <h5 className='text-center my-7'>Already have an account? <Link className='text-[#0177c6]' href={'/login'}>Login</Link></h5>
      </Form>
    </div>
  )
}

export default page