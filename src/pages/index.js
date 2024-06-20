import Layout from "@/components/Layout";
import Image from "next/image";
import profile from '../../public/images/profile.svg'
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import globe from '../../public/images/globe.png'
import { MdArrowOutward } from "react-icons/md";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    detectMobile();
  }, []);
  return (
    <>
    <Head>
      <title>Vaishh | Home page</title>
      </Head>
   {
    isMobile ? (
      <div className="flex items-center justify-center mx-4 h-screen">
      <div className="bg-red-500 text-white p-4 rounded-lg">
      We're working on our mobile version. Stay tuned for updates!
      </div>
    </div>
    
    ) :(
<main className="flex  items-center text-dark min-h-screen dark:text-light">
    <Layout className='pt-0'>
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image src={profile} alt="profile" className="w-full h-auto" priority
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 50w"/>
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText text="Where Femininity Meets Functionality" classname="text-6xl !text-left"></AnimatedText>
          <p className="my-4 text-base font-medium">Dive into my digital realm where aesthetics and functionality unite. As a dedicated web developer, I transform visions into vibrant web experiences with precision and creativity. Discover my journey of coding elegance and innovation, one project at a time.</p>
          <div className="flex items-center self-start mt-2"> 
            <Link href="./resume.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 
            rounded-lg text-lg font-semibold hover:bg-light dark:text-dark dark:bg-light hover:text-dark border-2 border-solid border-transparent
            hover:border-dark" >Resume <MdArrowOutward fontSize={'30'}/></Link>
            <Link href="mailto:vaishalib.2003@gmail.com" target={"_blank"}
            className="ml-4 text-lg font-medium capitalize dark:text-light text-white rounded-lg underline p-2.5 px-6" style={{background:'#8e16be'}}
            >Contact</Link>
          </div>
        </div>
      </div>
    </Layout>
    <div className="absolute right-8 bottom-8 inline-block w-48">
      <Image src={globe} className="w-full h-full"/>
    </div>
    </main>
    )
   }
    </>
  );
} 
