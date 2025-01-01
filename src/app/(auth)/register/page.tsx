import React from 'react'
import { Form } from '../components/Form'
import { Input } from '../components/Input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h2 className='text-center text-[34px]'>Sign Up</h2>
      <Form>
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
          h={false}
          classname='flex items-center justify-center flex-row-reverse'
          className='w-fit h-fit'
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