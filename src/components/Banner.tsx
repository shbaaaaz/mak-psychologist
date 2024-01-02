import Dots from "./Dots"

const Banner = ({ message }: { message: string }) => {
  return <div className='flex justify-center bg-white-500 w-full py-20 relative h-96 '>
    <h2 className='font-bold text-3xl'>{message}</h2>
    <div className="absolute md:top-10 -left-20 opacity-30">
    <Dots/>
    </div>
  </div>
}

export default Banner
