import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero';
import {SliderData} from '../components/SliderData'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography</title>
        <meta name="description" content="A photography app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Captur Photography' description='I love capturing beautiful moments and keep them alive.'/>
      <Slider slides={SliderData} />
    </>
  )
}
