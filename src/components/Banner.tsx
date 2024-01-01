const Banner = ({ message }: { message: string }) => {
  return <div className='flex justify-center bg-yellow-600 w-full py-16'>
    <h2 className='font-bold text-2xl text-gray-300'>{message}</h2>
  </div>
}

export default Banner
