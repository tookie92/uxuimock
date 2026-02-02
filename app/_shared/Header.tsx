"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

function Header() {
  const {user} = useUser() 
  return (
    <div className='flex justify-between items-center p-4'>
        <div>
            <h2 className='text-xl font-semibold'><span className='text-primary'>UXUI</span> Mock</h2>
        </div>
        <ul className='flex gap-5 text-lg'>
            <li className='hover:text-primary cursor-pointer'>Home</li>
            <li className='hover:text-primary cursor-pointer'>Pricing</li>
        </ul>
        {!user?
        <SignInButton mode='modal'>
         <Button>Get started</Button>
        </SignInButton>
        :
        <UserButton/>
      }
            
        
    </div>
  )
}

export default Header