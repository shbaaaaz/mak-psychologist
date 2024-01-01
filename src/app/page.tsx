import Hero from '@/components/Hero'
import Image from 'next/image'
import { fetchPsychologistDetails } from '@/lib/cmsData'
import { landingPage } from '../data/staticData.json'
import Banner from '@/components/Banner';

export default async function Home() {

  const response = await fetchPsychologistDetails();
  const { name, title, shortBio, profilePicture} = response;

  return (
    <main>
      <Hero name={name} title={title} shortBio={shortBio} heroImageURL={profilePicture.url} cta={landingPage.primaryCta}/>
      <Banner message="Believe in the process"/>
    </main>
  )
}
