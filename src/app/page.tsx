import Hero from '@/components/Hero'
import Image from 'next/image'
import { fetchPsychologistDetails } from '@/lib/cmsData'
import { landingPage } from '../data/staticData.json'
import Bio from '@/components/Bio';

export default async function Home() {

  const response = await fetchPsychologistDetails();
  const { name, title, shortBio, profilePicture, about} = response;

  return (
    <main>
      <Hero name={name} title={title} shortBio={shortBio} heroImageURL={profilePicture.url} cta={landingPage.primaryCta}/>
      <Bio about={about}/>
      
    </main>
  )
}
