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
    <div className='mt-20 flex flex-col md:flex-row justify-center md:justify-between items-center gap-20 px-2 md:px-20'>
        <div className="flex flex-col gap-7 md:w-1/2"> 
        <span className='text-xl'>Meet your <span className='text-pink-600'> {title.toLowerCase()} </span></span>
        <h1 className='text-3xl font-bold'>{name}</h1>
        <p>{shortBio}</p>
        <Link href={cta.url} target="_blank" className='font-bold bg-pink-600 text-white px-8 py-3 self-start rounded-lg'>{cta.text}</Link>
        </div>
        <div className="md:w-1/2 flex justify-end">
        <Image src={heroImageURL} alt={name} width={400} height={300}/>
        </div>
    </div>
  )
}

export default Hero