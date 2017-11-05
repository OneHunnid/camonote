import Layout from '../components/MyLayout.js'
import Header from '../components/Header'
import Hero from '../components/Hero.js'
import About from '../components/About.js'
import Prefooter from '../components/Prefooter.js'
import Footer from '../components/Footer.js'
import Link from 'next/link'

export default () => (
  <Layout>
    <div className="container--large">
      <Header />
      <Hero />
    </div>
    <About />
    <Prefooter />
    <Footer />
  </Layout>
)
