import Layout from '../components/MyLayout.js'
import Header from '../components/Header'
import Chat from '../components/Chat.js'
import Search from '../components/Search.js'
import React from 'react'
import getMessages from '../lib/get-messages.js'
import db from './../lib/firebaseDb'

class Channel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: {}};
  }
  /** 
   * Might want to get rid of componentWillMount here
   * Source: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
   * **/
  componentWillMount() {
    const key = this.props.url.query.name

    db.collection(key)
    .onSnapshot(querySnapshot => {
      let dataArray = []

      querySnapshot.forEach((doc) => {
        const snapshot = doc.data()
        dataArray.push(snapshot)
      });

      this.setState({data: dataArray})
    });
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
