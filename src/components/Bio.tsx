import Dots from "./Dots"
import { landingPage } from '../data/staticData.json'

const Bio = ({ about }: { about: string }) => {
  return <div className='flex justify-center bg-white-500 w-full my-10 py-20 relative h-96 '>
    <h2 className='font-bold text-3xl'>{landingPage.bio.title}</h2>
    
  </div>
}

export default Bio
