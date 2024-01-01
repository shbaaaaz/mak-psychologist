'use client'
import Image from "next/image"
import Link from "next/link"
import logo from '../../public/logo.png'
import Theme from "./Theme"
import { NavMenuItem } from "./config/interfaces"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = ({ menu }: {menu: NavMenuItem[]}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="mobile-menu">
    <div className='flex justify-between items-center mx-4 py-2'>
        <GiHamburgerMenu className='text-2xl' aria-label='menu hamburger' onClick={() => setIsMenuOpen(prevState => !prevState)}/>
      <div>
        <Link href="/"><Image src={logo} alt={'logo'} width={80} height={50}/></Link>
      </div>
        <Theme/>
    </div>
    <nav className={`py-10 w-screen h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 transition-transform ease-in-out duration-500 transform fixed top-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full' }`}>
     <ul className="py-10 flex flex-col justify-center items-center gap-5 relative">
        { menu.map((menuItem)=> <li key={menuItem.id} className="text-xl font-bold"><Link href={menuItem.url}>{menuItem.title}</Link></li>)}
        <span role="button" aria-label="Close" onClick={()=> setIsMenuOpen(false)} className="absolute right-10 top-0"> &#x2716;</span>
      </ul>
    </nav>
    </header>
  )
}

export default MobileMenu