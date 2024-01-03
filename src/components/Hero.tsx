import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({ name, title, shortBio, heroImageURL, cta } : 
        {   name: string, 
            title: string, 
            shortBio: string, 
            heroImageURL: string, 
            cta: { text: string, url: string} }) => {
    
  return (
    <section className='mt-12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-20 px-5 md:px-20'>
        <div className="flex flex-col gap-7 justify-center items-center md:items-start md:w-1/2"> 
        <span className='text-xl'>Meet your <span className='text-pink-600'> {title.toLowerCase()} </span></span>
        <h1 className='text-3xl md:text-5xl font-bold'>{name}</h1>
        <p className='text-center md:text-start'>{shortBio}</p>
        <div className='flex flex-col md:flex-row gap-5 self-stretch'>
        <Link href={cta.url} target="_blank" className='font-bold border border-pink-600 bg-pink-600 text-white px-8 py-3 rounded-lg md:self-start text-center'>{cta.text}</Link>
        <Link href={cta.url} target="_blank" className='font-bold border border-gray-800 dark:border-white px-8 py-3 rounded-lg md:self-start text-center'>Learn More</Link>
        </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
        <Image src={heroImageURL} alt={name} width={450} height={300}/>
        </div>
    </section>
  )
}

export default Hero