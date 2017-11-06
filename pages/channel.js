import Layout from '../components/MyLayout.js'
import Chat from '../components/Chat.js'
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
      this.setState({data: messages})
    })
  }
  render() {

    console.log(this)
    return (
      <Layout>
       <h1>{this.props.url.query.name}</h1>

       <Chat data={this.state.data}/>

      </Layout>
    )
  }
}

export default Channel
