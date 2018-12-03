import Layout from '../components/MyLayout.js'
import Header from '../components/Header'
import Chat from '../components/Chat.js'
import Search from '../components/Search.js'
import React from 'react'

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <div className="page-channel">
          <Header channelName={this.props.url.query.name}/>
          <Search />
          <div className="channel-wrapper">
            <Chat channelName={this.props.url.query.name}/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Channel
