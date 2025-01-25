import React from 'react'
import Link from 'next/link'

export default function Layout({children}) {
  return (
    <div className='flex gap-12'>
        <nav className='flex flex-col'>
        <Link href={'/homePage'}>Home</Link>
        <Link href={'/adminPanel/products'}>Products</Link>
        <Link href={'/adminPanel/orders'}>Orders</Link>
        </nav>
        <main>{children}</main>
    </div>
  )
}
