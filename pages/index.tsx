
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'


import Hero from '../components/hero/Hero'
import FormContainer from '../components/formcontainer/FormContainer'
import Footer from '../components/footer/Footer'





export default function Home() {
  return (
    <>
      <Head>
        <title>AI Item Descriptions</title>
        <meta name="description" content="Generate your item description with ease" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <Hero/>
      <main className='mx-[12px] md:mx-[120px]' >
        <FormContainer/>
        <Footer/>
   

 
      </main>
     
      </>
      
    
    </>
  )
}
