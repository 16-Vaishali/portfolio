import React from 'react'
import AnimatedText from './AnimatedText'
import cors from '../../public/images/cors.png'
import git from '../../public/images/cors.webp'
import Link from 'next/link'




const Article=({title,date,link})=>{
    return (
        <li
    className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0
      border border-solid border-dark border-r-4 border-b-4'>
    <Link href={link} target={'_blank'}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            </Link>
    <span className='text-primary font-semibold pl-4'>{date}</span>
  </li>
    )
}
const Articles = () => {
  return (
    <div className='w-full h-min flex flex-col items-center justify-center overflow-hidden'>
   <AnimatedText text={'Words are powerful than Swords'} classname='!text-6xl my-12'/>  
   <ul className='w-[90%]'>
    <Article title={'Unlocking Git’s Full Potential: Essential Tools'} link={'https://medium.com/@vaishalib.2003/unlocking-gits-full-potential-essential-tools-894d5f17efaa'} img={git} date={'June 2024'}/>
    <Article title={'From Confusion to Clarity: A Developer’s Handbook on CORS'} link={'https://medium.com/@vaishalib.2003/from-confusion-to-clarity-a-developers-handbook-on-cors-53d1369a2ed3'} img={cors} date={'May 2024'}/>
   </ul>
    </div>
  )
}

export default Articles
