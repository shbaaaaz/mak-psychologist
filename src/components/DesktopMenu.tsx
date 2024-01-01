import Image from "next/image"
import Link from "next/link"
import logo from '../../public/logo.png'
import Theme from "./Theme"
import { NavMenuItem } from "./config/interfaces"

const DesktopMenu = ({ menu }: { menu: NavMenuItem[]}) => {

  return (
    <header className="desktop-menu">
    <nav className='flex justify-between items-center py-2'>
      <div className='w-20'>
        <Link href="/"><Image src={logo} alt={'logo'}/></Link>
      </div>
      <ul className="flex justify-center gap-10 items:center flex-grow">
        { menu.map((menuItem)=> <li key={menuItem.id} className="text-xl font-bold"><Link href={menuItem.url}>{menuItem.title}</Link></li>)}
      </ul>
        <Theme/>
    </nav>
    </header>
  )
}

export default DesktopMenu