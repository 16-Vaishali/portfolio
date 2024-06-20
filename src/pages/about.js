import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import aboutPic from '../../public/images/me.jpg'
import Skills from '@/components/Skills'

const about = () => {
  return (
    <div>
      <>
      <Head>
        <title>Vaishh | About page</title>
        <meta name='description'/>
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className={'pt-12'}>
        <AnimatedText text={"Designing Tomorrow, Today"} classname=' !text-6xl mb-10'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-5 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About me</h2>
                <p className='font-medium'>In my pursuit of creating complete digital experiences, I found my calling in fullstack development. Driven by an unwavering passion for perfection and a deep-seated desire to immerse myself in every facet of web development</p>

                <p className='my-4 font-medium'>   From conceptualization to execution,  I relish the opportunity to engage with each phase, weaving together frontend aesthetics with backend functionality to craft seamless solutions. 
                </p>

                <p className='my-4 font-medium'>Fullstack development is not merely a profession. Its a philosophy—a commitment to excellence that propels me to explore the depths of design and the intricacies of code.</p> 
                <p className='font-medium'> With each project, I am reminded of the power of fullstack fusion, where creativity and technical prowess converge to breathe life into ideas and elevate them into fully-realized digital realities </p>
                
            </div>
            <div className='col-span-3 relative rounded-2xl border-2 border-solid border-dark bg-light p-8'>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-xl bg-dark'/>
    <div className="relative w-full" style={{ paddingTop: '100%' }}>
        <Image src={aboutPic} className='absolute inset-0 w-full h-full object-cover rounded-2xl' alt="About Picture"
        priority sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33w" />
    </div>
</div>
        </div>
        <Skills/>
        </Layout>
      </main>
      </>
    </div>
  )
}

export default about
