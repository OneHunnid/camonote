import Layout from '../components/MyLayout.js'
import React from 'react'

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const key = this.props.url.query.name;

    console.log(key)
  }
  render() {
    console.log(this.props)
    return (
      <Layout>
       <h1>{this.props.url.query.name}</h1>
       <div>Text and stuff can go here...</div>
      </Layout>
    )
  }
}

export default Channel
