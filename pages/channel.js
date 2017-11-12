import Layout from '../components/MyLayout.js'
import Header from '../components/Header'
import Chat from '../components/Chat.js'
import Search from '../components/Search.js'
import React from 'react'
import getMessages from '../lib/get-messages.js'

class Channel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: {}};
  }
  componentWillMount() {
    const key = this.props.url.query.name
    let fbData = getMessages(key)

    fbData.then((messages) => {
      // messages doesn't return data...@todo
      this.setState({data: messages})
    })
  }
  render() {
    return (
      <Layout>
        <div className="page-channel">
          <Header channelName={this.props.url.query.name}/>
          <Search />
          <div className="channel-wrapper">
            <Chat data={this.state.data} channelName={this.props.url.query.name}/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Channel
