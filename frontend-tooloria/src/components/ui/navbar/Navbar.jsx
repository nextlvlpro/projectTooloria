"use client"
import Image from 'next/image'
import React from 'react'
import UserInfo from '../UserInfo'
import { SessionProvider } from 'next-auth/react'
import Menu from './navbarComps/Menu'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='w-full bg-primary text-white p-3 sticky top-0 z-50 flex items-center justify-between '>
        <Link href="/" className='flex items-center justify-start'>
            <Image
            src="/favicon.ico"
            alt="logo"
            width={30}
            height={30}
            />
            <span>Tooloria</span>
        </Link>
        <div className=''>
            <SessionProvider>
                <Menu />
            </SessionProvider>
        </div>
    </nav>
  )
}
