import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Products from './(pages)/Shop/(Products)/Products'
import Values from '../components/Values'
import Sales from '@/components/Sales'
import Articles from '../components/Articles'
import Newsletter from '../components/Newsletter'


export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Banner></Banner>
      <Products></Products>
      <Values></Values>
      <Sales></Sales>
      <Articles></Articles>
      <Newsletter></Newsletter>
    </>
  )
}
