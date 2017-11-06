import Layout from '../components/MyLayout.js'
import Chat from '../components/Chat.js'
import React from 'react'
import getMessages from '../lib/get-messages.js'

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const key = this.props.url.query.name;

    // send key to getMessages and return firebase obj
    // getMessages(key)

    // send obj as prop to <Chat />
  }
  render() {
    return (
      <Layout>
       <h1>{this.props.url.query.name}</h1>
       <div>Text and stuff can go here...</div>

       <Chat />

      </Layout>
    )
  }
}

export default Channel
