import Layout from '../components/MyLayout.js'
import Hero from '../components/Hero.js'
import About from '../components/About.js'
import Prefooter from '../components/Prefooter.js'
import Footer from '../components/Footer.js'
import Link from 'next/link'

export default () => (
  <Layout>
    <Hero />
    <About />
    <Prefooter />
    <Footer />
  </Layout>
)
