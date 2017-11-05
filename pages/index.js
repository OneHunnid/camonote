import Layout from '../components/MyLayout.js'
import Header from '../components/Header'
import Hero from '../components/Hero.js'
import About from '../components/About.js'
import Prefooter from '../components/Prefooter.js'
import Footer from '../components/Footer.js'
import Link from 'next/link'
import $ from 'jquery'
import axios from 'axios'

// const ChannelLink = (props) => (
//   <li>
//     <Link as={`/c/${props.id}`} href={`/channel?name=${props.name}`}>
//       <a>{props.name}</a>
//     </Link>
//   </li>
// )

// <ul>
//   <ChannelLink id="frontpage" name="frontpage"/>
//   <ChannelLink id="music" name="music"/>
//   <ChannelLink id="funny" name="funny"/>
// </ul>

export default () => (
  <Layout>
    <div className="container--large">
      <Header />
      <Hero />

      <ChannelSearch />

    </div>
    <About />
    <Prefooter />
    <Footer />
  </Layout>
)

class ChannelSearch extends React.Component {
  __handleSubmit(e) {
    e.preventDefault();
    const searchValue = $('#search').val();
    window.location="/c/" + searchValue;
  }
  render() {
    return (
      <div>
        <form onSubmit={this.__handleSubmit}>
          <input id="search" type="search" placeholder="enter chat name..."/>
        </form>
      </div>
    )
  }
}
