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
  componentWillMount() {
    const key = this.props.url.query.name

    db.collection(key)
    .onSnapshot(querySnapshot => {
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        console.log(`${doc.id} => ${doc.data()}`);
        const messages = doc.data()
        this.setState({data: messages})
      });
    });

    // db.collection(key).get().then((querySnapshot) => {
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      //   const messages = doc.data()
      //   this.setState({data: messages})
      // });
    // });

    // db.collection(key)
    // .onSnapshot(function(doc) {
    //   console.log('onSnapshot called')
    //     console.log("Current data: ", doc.data());
    //     let messages = doc.data()
    //     // this.setState({data: messages})
    // });
  }
  render() {
    console.log(this.state)
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
