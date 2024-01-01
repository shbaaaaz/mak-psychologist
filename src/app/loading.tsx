import logo from '../../public/logo.png'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center animate-flip'>
        <Image src={logo} alt='loading' width={100} height={100}/>
    </div>
  )
}

export default loading