'use client'

import { useMediaQuery } from 'react-responsive'
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
import { NavMenuItem } from './config/interfaces'
import { MOBILE_MAX_WIDTH } from '@/utils/constant'
import { navMenu } from '../data/staticData.json'

const menu: NavMenuItem[] = navMenu;

const Navbar = () => {

  const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX_WIDTH })
  return (
    <>
    {isMobile ? <MobileMenu menu={menu}/>: <DesktopMenu menu={menu}/>}
    </>
  )
}

export default Navbar