import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()}&copy; All Rights reserved</span>
       <div className='flex items-center '>
     Made with <span className='text-red-600 dark:text-primaryDark text-3xl px-1'>&hearts;</span>by&nbsp;<Link href="/">Vaishali</Link>
       </div>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer
