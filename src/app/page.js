'use client';
import dynamic from "next/dynamic";
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import SmoothScroll from '@/components/smoothScroll';
import Landing from '@/components/Landing/index'
import Landing2 from '@/components/Landing2/Index';
import About from '@/components/About/index'
import About2 from '@/components/About2/Index'
import Projects2 from '@/components/Projects2/index'
import EmailSection from '@/components/EmailSection/EmailSection'

import StickyCursor from '@/components/StickyCursor/index'


const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>
})

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <SmoothScroll>
    
    
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <StickyCursor/>
      <Landing2/>

      <div id="about" className={styles.earth}>

      <Earth />
      <About/>

      </div>

      <div className="text-white">
      <About2/>
      </div>


      <div id='projects' className='container mt-24 mx-auto px-12 py-4'>
      <Projects2/>
      </div>
   
      <div className='container mt-24 mx-auto px-12 py-4 -z-10'>
      <EmailSection />
      </div>

    </main>
    </SmoothScroll>
  )
}
